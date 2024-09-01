// import { NextResponse } from "next/server";
// import { writeFile, mkdir } from "fs/promises";
// import path from "path";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");
//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     const uploadDir = path.join(process.cwd(), "/tmp");
//     const filePath = path.join(uploadDir, file.name);

//     await mkdir(uploadDir, { recursive: true });
//     await writeFile(filePath, buffer);

//     return NextResponse.json({ success: true, filePath });
//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.json({ error: "File upload failed" }, { status: 500 });
//   }
// }
