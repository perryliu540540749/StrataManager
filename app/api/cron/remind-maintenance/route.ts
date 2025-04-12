import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  console.log("Maintenance reminder sent at", new Date().toISOString());
  return NextResponse.json({ message: "Maintenance reminder sent!" });
}
