import { successResponse } from "@/app/utils/apiResponses";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { message } = await request.json();
  return successResponse({ message: message + " " + Date.now() });
}
