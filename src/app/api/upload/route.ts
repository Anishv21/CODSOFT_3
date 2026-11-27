import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return NextResponse.json({ error: "Resume cloud upload is not configured yet. You can submit the application without a resume for the demo." }, { status: 503 });
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return NextResponse.json({ error: "Choose a PDF resume first." }, { status: 400 });
    if (file.type !== "application/pdf" || file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Only PDF files up to 5 MB are allowed." }, { status: 400 });
    const bytes = Buffer.from(await file.arrayBuffer());
    const dataUri = `data:application/pdf;base64,${bytes.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataUri, { folder: "careerhub/resumes", resource_type: "raw" });
    return NextResponse.json({ url: result.secure_url });
  } catch {
    return NextResponse.json({ error: "Resume upload failed. Try again." }, { status: 500 });
  }
}
