"use server";

import { redirect } from "next/navigation";
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

export async function loginAction(formData) {
  redirect("/marketplace?login=success");
}

export async function checkoutAction(formData) {
  const supabase = getSupabaseClient();

  const name = formData.get("name") || "User 2ndTime";
  const address = formData.get("address") || "Alamat belum diisi";
  const payment = formData.get("payment") || "Transfer Bank";
  const total = formData.get("total") || "0";

  const { data, error } = await supabase
    .from("order")
    .insert({
      type: "checkout",
      content: `Checkout berhasil oleh ${name} dengan total Rp ${Number(
        total
      ).toLocaleString("id-ID")}`,
      metadata: {
        name,
        address,
        payment,
        total,
      },
    })
    .select();

  if (error) {
    console.error("ERROR SUPABASE CHECKOUT:", error);
    throw new Error(error.message);
  }

  console.log("CHECKOUT BERHASIL MASUK SUPABASE:", data);

  redirect("/marketplace/checkout/success");
}

export async function sendMessageAction(formData) {
  redirect("/marketplace/chat?message=success");
}