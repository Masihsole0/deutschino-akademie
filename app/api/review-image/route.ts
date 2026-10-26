
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (
    !path ||
    !/^[A-Za-z0-9._-]+$/.test(path) ||
    path.includes("..") ||
    !supabaseUrl
  ) {
    return new NextResponse("Invalid image path", { status: 400 });
  }

  const imageUrl =
    `${supabaseUrl}/storage/v1/object/public/review-images/${encodeURIComponent(path)}`;

  try {
    const response = await fetch(imageUrl, {
      signal: AbortSignal.timeout(12000),
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return new NextResponse(null, { status: 404 });
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.startsWith("image/")) {
      return new NextResponse(null, { status: 415 });
    }

    return new NextResponse(response.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}
