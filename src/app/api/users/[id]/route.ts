import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    message: `User ${id} fetched successfully`,
    data: { id },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: `User ${id} updated successfully`,
      data: { id, ...body },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "User update failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    return NextResponse.json({
      success: true,
      message: `User ${id} deleted successfully`,
      data: { id },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "User deletion failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
