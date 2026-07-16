import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, pack, location, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // In production, save to database here
    // e.g., await db.enquiries.create({ name, phone, pack, location, message });

    const enquiry = {
      name,
      phone,
      pack: pack || "not-sure",
      location: location || "",
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    console.log("New enquiry:", enquiry);

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
      enquiry,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // In production, fetch from database
  return NextResponse.json({
    enquiries: [],
    message: "Enquiry API is running",
  });
}
