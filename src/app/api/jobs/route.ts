import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({ orderBy: { createdAt: "desc" }, include: { _count: { select: { applications: true } } } });
    return NextResponse.json(jobs);
  } catch {
    return NextResponse.json({ error: "Database connection failed. Check DATABASE_URL and run migrations." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["title", "company", "location", "salary", "description", "skills"];
    if (required.some((key) => !String(body[key] ?? "").trim())) return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    const job = await prisma.job.create({ data: { title: body.title, company: body.company, location: body.location, salary: body.salary, description: body.description, skills: body.skills, type: body.type || "Full-time" } });
    return NextResponse.json(job, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not create job. Check your database connection." }, { status: 500 });
  }
}
