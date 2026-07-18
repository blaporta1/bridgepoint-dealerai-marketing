import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { serverEnv } from "@/lib/env";

const leadSchema = z.object({
  type: z.enum(["demo", "roi_pdf"]),
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  dealership: z.string().min(1).max(200),
  role: z.string().max(80).optional().default("Other"),
  rooftops: z.string().max(20).optional().default("1"),
  monthlyLeadVolume: z.string().max(40).optional().default(""),
  phone: z.string().max(40).optional().default(""),
  companyWebsite: z.string().max(200).optional().default(""), // honeypot
  utms: z.record(z.string(), z.string()).optional().default({}),
  roi: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const limited = rateLimit(`lead:${ip}`, serverEnv.leadRateLimitPerHour);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Call the demo line or try again later." },
        { status: 429 }
      );
    }

    const json = await req.json();
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Check your fields and try again.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot: bots fill hidden companyWebsite
    if (data.companyWebsite && data.companyWebsite.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (data.type === "demo" && !data.phone.trim()) {
      return NextResponse.json(
        { error: "Enter a mobile or dealership line we can reach." },
        { status: 400 }
      );
    }

    const payload = {
      source: "dealerai-marketing-site",
      submittedAt: new Date().toISOString(),
      ...data,
      meta: {
        ip,
        userAgent: req.headers.get("user-agent") || "",
        referer: req.headers.get("referer") || "",
      },
    };

    if (serverEnv.intakeUrl) {
      const intakeRes = await fetch(serverEnv.intakeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!intakeRes.ok) {
        console.error("Intake forward failed", intakeRes.status, await intakeRes.text());
        return NextResponse.json(
          { error: "Something broke on our side. Call us or retry." },
          { status: 502 }
        );
      }
    } else {
      // Dev-friendly: accept leads without intake configured
      console.info("[lead-intake-dev]", JSON.stringify(payload, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something broke on our side. Call us or retry." },
      { status: 500 }
    );
  }
}
