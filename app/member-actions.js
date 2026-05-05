"use server";

import { createClient } from "@supabase/supabase-js";

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase belum terhubung. Cek file .env.local");
  }

  return createClient(supabaseUrl, supabaseKey);
}

export async function createMemberAction({ nama, email }) {
  if (!nama || !email) {
    return {
      success: false,
      message: "Nama dan email harus diisi terlebih dahulu.",
    };
  }

  const supabase = getSupabaseClient();

  const { error } = await supabase.from("members").insert({
    nama: nama,
    email: email,
    pesan: "Lengkapi pembayaran dengan email yang kami kirim",
  });

  if (error) {
    console.error("ERROR SUPABASE MEMBERS:", error);

    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Berhasil daftar! Lengkapi pembayaran dengan email yang kami kirim.",
  };
}