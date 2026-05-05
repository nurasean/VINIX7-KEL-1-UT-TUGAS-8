import Link from "next/link";
import MarketplaceShell from "../../components/MarketplaceShell";
import SimilarProducts from "../../components/SimilarProducts";

export default function CheckoutSuccessPage() {
  return (
    <MarketplaceShell>
      <main className="bg-[#F0F2F8] px-[42px] py-[64px]">
        <section className="mx-auto flex max-w-[900px] flex-col items-center rounded-[20px] bg-white px-8 py-12 text-center">
          <div className="mb-6 flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#2176B5] text-[48px] font-bold text-white">
            ✓
          </div>

          <h1 className="mb-4 text-[31px] font-semibold leading-[46px] text-[#2176B5]">
            Checkout Berhasil
          </h1>

          <p className="mb-8 max-w-[560px] text-[16px] leading-[24px] text-[#4B95C3]">
            Pesanan kamu berhasil diproses dan data checkout sudah dikirim ke
            database Supabase.
          </p>

          <div className="flex gap-4">
            <Link
              href="/marketplace"
              className="rounded-[50px] bg-[#2176B5] px-8 py-4 text-[16px] font-semibold text-white transition hover:bg-[#08497A]"
            >
              Kembali ke Marketplace
            </Link>

            <Link
              href="/marketplace/chat"
              className="rounded-[50px] bg-[#FE7F2D] px-8 py-4 text-[16px] font-semibold text-white transition hover:bg-[#e96f21]"
            >
              Chat Seller
            </Link>
          </div>
        </section>

        <SimilarProducts />
      </main>
    </MarketplaceShell>
  );
}