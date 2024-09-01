import { NextResponse } from "next/server";

export async function POST(request) {
  const { message } = await request.json();
  return NextResponse.json({
    message: message + " " + Date.now(),
  });
}
