import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  console.log("Maintenance reminder sent at", new Date().toISOString());
  return NextResponse.json({ message: "Maintenance reminder sent!" });
}
