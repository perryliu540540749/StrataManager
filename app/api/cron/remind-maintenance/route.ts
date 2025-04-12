import { NextResponse } from "next/server";

export const runtime = "edge"; // 指定使用 Edge Runtime

export async function GET() {
  // 模擬發送維護提醒（實際應用中可以發送郵件或通知）
  console.log("Maintenance reminder sent at", new Date().toISOString());
  return NextResponse.json({ message: "Maintenance reminder sent!" });
}
