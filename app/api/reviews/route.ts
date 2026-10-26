
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function getPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function getServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// دریافت نظرات عمومی
export async function GET() {
  const supabase = getPublicClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "تنظیمات Supabase ناقص است." },
      { status: 500 }
    );
  }

  const { data, error } = await supabase
    .from("reviews")
    .select("full_name, comment, level, avatar_url");

  if (error) {
    console.error("Failed to fetch reviews:", error.message);

    return NextResponse.json(
      { error: "دریافت نظرات ناموفق بود." },
      { status: 500 }
    );
  }

  const storagePrefix =
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/review-images/`;

  const reviews = (data ?? []).map((review) => {
    let avatarUrl: string | null = null;

    if (review.avatar_url?.startsWith(storagePrefix)) {
      const path = review.avatar_url.slice(storagePrefix.length);

      if (
        path &&
        !path.includes("..") &&
        /^[A-Za-z0-9._-]+$/.test(path)
      ) {
        avatarUrl = `/api/review-image?path=${encodeURIComponent(path)}`;
      }
    }

    return {
      ...review,
      avatar_url: avatarUrl,
    };
  });

  return NextResponse.json(reviews, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

// ثبت نظر از طریق سرور
export async function POST(request: NextRequest) {
  const supabase = getServerClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "تنظیمات امن Supabase روی سرور کامل نیست." },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const level = String(formData.get("level") ?? "").trim();
    const comment = String(formData.get("comment") ?? "").trim();
    const rawPhone = String(formData.get("phone") ?? "").trim();
    const image = formData.get("image");

    const phone = rawPhone.replace(/[۰-۹٠-٩]/g, (digit) => {
      const persian = "۰۱۲۳۴۵۶۷۸۹";
      const arabic = "٠١٢٣٤٥٦٧٨٩";
      const index = persian.indexOf(digit);

      return String(index !== -1 ? index : arabic.indexOf(digit));
    });

    if (
      name.length < 2 ||
      name.length > 100 ||
      comment.length < 2 ||
      comment.length > 3000 ||
      !["A1", "A2", "B1", "B2"].includes(level) ||
      !/^09\d{9}$/.test(phone)
    ) {
      return NextResponse.json(
        { error: "لطفاً نام، شماره، سطح زبان و متن نظر را بررسی کنید." },
        { status: 400 }
      );
    }

    if (
      image instanceof File &&
      image.size > 5 * 1024 * 1024
    ) {
      return NextResponse.json(
        { error: "حجم عکس نباید بیشتر از ۵ مگابایت باشد." },
        { status: 400 }
      );
    }

    if (
      image instanceof File &&
      image.size > 0 &&
      !["image/webp", "image/jpeg", "image/png"].includes(image.type)
    ) {
      return NextResponse.json(
        { error: "فرمت عکس باید WebP، JPG یا PNG باشد." },
        { status: 400 }
      );
    }

    // بررسی شماره تکراری
    const { data: existingReview, error: checkError } = await supabase
      .from("reviews")
      .select("phone")
      .eq("phone", phone)
      .limit(1);

    if (checkError) {
      console.error("Phone check failed:", checkError.message);

      return NextResponse.json(
        { error: "بررسی شماره تلفن ناموفق بود." },
        { status: 500 }
      );
    }

    if (existingReview && existingReview.length > 0) {
      return NextResponse.json(
        { error: "با این شماره قبلاً نظر ثبت شده است." },
        { status: 409 }
      );
    }

    let avatarUrl = "";
    let uploadedPath: string | null = null;

    // آپلود عکس از سمت سرور
    if (image instanceof File && image.size > 0) {
      const extension =
        image.type === "image/webp"
          ? "webp"
          : image.type === "image/png"
            ? "png"
            : "jpg";

      uploadedPath = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("review-images")
        .upload(uploadedPath, image, {
          contentType: image.type,
          cacheControl: "31536000",
          upsert: false,
        });

      if (uploadError) {
        console.error("Image upload failed:", uploadError.message);

        return NextResponse.json(
          { error: "آپلود عکس ناموفق بود." },
          { status: 502 }
        );
      }

      const { data } = supabase.storage
        .from("review-images")
        .getPublicUrl(uploadedPath);

      avatarUrl = data.publicUrl;
    }

    const { error: insertError } = await supabase
      .from("reviews")
      .insert({
        full_name: name,
        level,
        comment,
        phone,
        avatar_url: avatarUrl,
      });

    if (insertError) {
      console.error("Review insert failed:", insertError.message);

      // حذف عکس در صورت شکست ثبت نظر
      if (uploadedPath) {
        await supabase.storage
          .from("review-images")
          .remove([uploadedPath]);
      }

      return NextResponse.json(
        { error: "ذخیره نظر ناموفق بود." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Review submission failed:", error);

    return NextResponse.json(
      { error: "خطایی هنگام ثبت نظر رخ داد." },
      { status: 500 }
    );
  }
}
