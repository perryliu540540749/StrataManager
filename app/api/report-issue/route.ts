import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const { issue, unit } = await request.json();
  // 模擬儲存問題報告（實際應用中可以存到資料庫）
  console.log(`Issue reported for ${unit}: ${issue}`);
  return NextResponse.json({ message: "Issue reported successfully!", issue, unit });
}
