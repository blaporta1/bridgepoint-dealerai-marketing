"use client";

import { useEffect } from "react";
import { captureUtms } from "@/lib/analytics";

export function UtmCapture() {
  useEffect(() => {
    captureUtms();
  }, []);
  return null;
}
