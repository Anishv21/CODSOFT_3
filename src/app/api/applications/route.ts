import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const applications = await prisma.application.findMany({ include: { job: true }, orderBy: { createdAt: "desc" } });
    return NextResponse.json(applications);
  } catch {
    return NextResponse.json({ error: "Could not load applications." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.candidate || !body.email || !body.jobId) return NextResponse.json({ error: "Name, email and job are required." }, { status: 400 });
    const application = await prisma.application.create({ data: { candidate: body.candidate, email: body.email, phone: body.phone || null, resumeUrl: body.resumeUrl || null, coverLetter: body.coverLetter || null, jobId: body.jobId } });
    return NextResponse.json(application, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Application could not be submitted. Please check the selected job and database." }, { status: 500 });
  }
}
