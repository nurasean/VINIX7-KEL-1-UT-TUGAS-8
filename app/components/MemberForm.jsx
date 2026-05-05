"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default function MemberForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState(
    "Lengkapi pembayaran dengan email yang kami kirim"
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !email) {
      setPesan("Nama dan email harus diisi terlebih dahulu.");
      return;
    }

    setLoading(true);
    setPesan("Mengirim data ke Supabase...");

    const { error } = await supabase.from("members").insert([
      {
        nama: nama,
        email: email,
        pesan: "Lengkapi pembayaran dengan email yang kami kirim",
      },
    ]);

    if (error) {
      console.error("Gagal insert members:", error);
      setPesan(`Gagal masuk Supabase: ${error.message}`);
      setLoading(false);
      return;
    }

    setNama("");
    setEmail("");
    setPesan("Berhasil daftar! Lengkapi pembayaran dengan email yang kami kirim.");
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-30 flex h-[348px] w-[733px] flex-col items-center gap-[32px]"
    >
      {/* NAMA */}
      <div className="flex h-[94px] w-[733px] flex-col items-start gap-[8px]">
        <label className="h-[30px] w-[733px] text-[20px] font-semibold leading-[30px] text-[#F0F2F8]">
          Nama
        </label>

        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama . . ."
          className="h-[56px] w-[733px] rounded-[20px] border border-[#F0F2F8] bg-transparent px-[16px] text-[16px] font-normal leading-[24px] text-[#F0F2F8] placeholder:text-[#F0F2F8] focus:outline-none"
        />
      </div>

      {/* EMAIL */}
      <div className="flex h-[94px] w-[733px] flex-col items-start gap-[8px]">
        <label className="h-[30px] w-[733px] text-[20px] font-semibold leading-[30px] text-[#F0F2F8]">
          Email yang Telah Terdaftar di 2ndTime
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email . . ."
          className="h-[56px] w-[733px] rounded-[20px] border border-[#F0F2F8] bg-transparent px-[16px] text-[16px] font-normal leading-[24px] text-[#F0F2F8] placeholder:text-[#F0F2F8] focus:outline-none"
        />
      </div>

      {/* BUTTON + NOTE */}
      <div className="flex h-[96px] w-[430px] flex-col items-center gap-[16px]">
        <button
          type="submit"
          disabled={loading}
          className="flex h-[56px] w-[198px] cursor-pointer items-center justify-center gap-[16px] rounded-[50px] bg-[#FE7F2D] px-[32px] py-[16px] text-[16px] font-semibold leading-[24px] text-[#F0F2F8] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Mendaftar..." : "Daftar Sekarang"}
        </button>

        <p className="min-h-[24px] w-[430px] text-center text-[16px] font-normal leading-[24px] text-[#FE7F2D]">
          {pesan}
        </p>
      </div>
    </form>
  );
}