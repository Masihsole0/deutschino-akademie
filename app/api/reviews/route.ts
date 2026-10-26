
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase configuration is missing" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from("reviews")
    .select("full_name, comment, level, avatar_url");

  if (error) {
    console.error("Failed to fetch reviews:", error.message);

    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }

  return NextResponse.json(data ?? [], {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
