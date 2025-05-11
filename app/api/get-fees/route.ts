import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const unit = searchParams.get("unit") || "unknown";
  // 模擬物業管理費用數據
  const fees = {
    "unit-101": 500,
    "unit-102": 600,
    "unit-103": 550,
  };
  const amount = fees[unit as keyof typeof fees] || 0;
  return NextResponse.json({ unit, fee: amount });
}
