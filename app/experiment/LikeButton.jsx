"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-4 rounded-full bg-[#FE7F2D] px-5 py-2 text-white transition hover:bg-white hover:text-[#FE7F2D] hover:ring-2 hover:ring-[#FE7F2D]"
    >
      Like ({likes})
    </button>
  );
}