"use client";

import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

type Review = {
  full_name: string;
  comment: string;
  level: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const [active, setActive] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
const [level, setLevel] = useState("");
const [text, setText] = useState("");

useEffect(() => {
  const getReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setReviews(data || []);
  };

  getReviews();
}, []);

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActive((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const submitReview = async () => {
  const { error } = await supabase
    .from("reviews")
    .insert([
      {
        full_name: name,
        level,
        comment: text,
      },
    ]);

  if (error) {
    alert("خطا در ثبت نظر");
    console.log(error);
    return;
  }

  alert("نظر شما ثبت شد");

  setName("");
  setLevel("");
  setText("");
};
  return (
    <section className="py-20 px-6 bg-gray-50 text-center overflow-hidden">

      <h2 className="text-3xl font-bold text-blue-900 mb-12">
        نظرات زبان‌آموزان
      </h2>

      <div className="relative flex justify-center items-center h-80">

        {reviews.map((review, index) => {

          let position = "";

          if (index === active) {
            position =
              "translate-x-0 scale-100 opacity-100 blur-0 z-20";
          } 
          else if (
            index === (active + 1) % reviews.length
          ) {
            position =
              "translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
          } 
          else {
            position =
              "-translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
          }

          return (
            <div
              key={index}
              className={`
                absolute w-80 bg-white rounded-3xl 
                shadow-xl p-8
                transition-all duration-700 ease-in-out
                ${position}
              `}
            >

              <p className="text-gray-700 mb-6 leading-7">
                "{review.comment}"
              </p>

              <h3 className="font-bold text-blue-900">
                {review.full_name}
              </h3>

              <span className="text-gray-500 text-sm">
                سطح {review.level}
              </span>

            </div>
          );
        })}

      </div>


      <div className="flex justify-center gap-4 mt-8">

  <button
    onClick={prevReview}
    className="bg-gray-200 px-6 py-3 rounded-full"
  >
    قبلی
  </button>

  <button
    onClick={nextReview}
    className="bg-blue-900 text-white px-6 py-3 rounded-full"
  >
    بعدی
  </button>

  <button
  onClick={() => setShowForm(!showForm)}
  className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full"
>
  ثبت نظر
</button>

</div>

{showForm && (
  <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-3xl shadow-lg">

    <h3 className="text-xl font-bold text-blue-900 mb-6">
      ثبت نظر شما
    </h3>

    <input
  type="text"
  placeholder="نام و نام خانوادگی"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
/>

    <select
  value={level}
  onChange={(e) => setLevel(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
>
      <option>انتخاب سطح زبان</option>
      <option>A1</option>
      <option>A2</option>
      <option>B1</option>
      <option>B2</option>
    </select>

    <textarea
  placeholder="نظر شما"
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="w-full border rounded-xl p-3 h-32 mb-4"
/>

    <button
  onClick={submitReview}
  className="w-full bg-blue-900 text-white py-3 rounded-xl"
>
  ارسال نظر
</button>

  </div>
)}


    </section>
  );
}