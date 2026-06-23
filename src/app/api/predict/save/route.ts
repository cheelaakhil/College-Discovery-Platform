import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { exam, rank, category, state } = await req.json();

    if (!exam || !rank) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prediction = await prisma.predictionResult.create({
      data: {
        exam,
        rank: parseInt(rank, 10),
        category: category || "General",
        state: state || "All India",
        userId: (session.user as any).id,
      },
    });

    return NextResponse.json({ success: true, prediction }, { status: 200 });
  } catch (error) {
    console.error("Error saving prediction:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
