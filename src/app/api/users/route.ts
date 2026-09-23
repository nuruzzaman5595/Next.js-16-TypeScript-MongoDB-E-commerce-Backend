import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Users fetched successfully",
    data: [],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "User creation failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
