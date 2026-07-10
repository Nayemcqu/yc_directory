import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export function GET() {
  Sentry.logger.info("Sentry example API called");

  return NextResponse.json({
    message: "Sentry API is working.",
  });
}