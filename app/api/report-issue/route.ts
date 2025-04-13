import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const unit = searchParams.get("unit") || "unknown";
  return NextResponse.json({ message: `No issues found for ${unit}` });
}

export async function POST(request: Request) {
  const { issue, unit } = await request.json();
  if (!issue || !unit) {
    return NextResponse.json({ error: "Missing issue or unit" }, { status: 400 });
  }
  console.log(`Issue reported for ${unit}: ${issue}`);
  return NextResponse.json({ message: "Issue reported successfully!", issue, unit });
}
