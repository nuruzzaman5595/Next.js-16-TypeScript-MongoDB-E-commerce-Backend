import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Payments fetched successfully",
    data: [],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "Payment created successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Payment creation failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
