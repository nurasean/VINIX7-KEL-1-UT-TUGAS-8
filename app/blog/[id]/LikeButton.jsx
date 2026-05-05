"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-8 rounded-full bg-[#FE7F2D] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#FE7F2D] hover:ring-2 hover:ring-[#FE7F2D]"
    >
      Like Artikel ({likes})
    </button>
  );
}