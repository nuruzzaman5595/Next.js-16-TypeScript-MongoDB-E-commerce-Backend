import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "Forgot password route is working",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Forgot password failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
