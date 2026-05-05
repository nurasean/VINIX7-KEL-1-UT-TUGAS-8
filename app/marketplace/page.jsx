import Link from "next/link";
import MarketplaceShell from "./components/MarketplaceShell";
import ProductCard from "./components/ProductCard";
import { categories, products } from "./data";

export default async function MarketplacePage({ searchParams }) {
  const params = await Promise.resolve(searchParams);
  const loginSuccess = params?.login === "success";

  return (
    <MarketplaceShell>
      <main>
        {loginSuccess && (
          <div className="bg-[#FE7F2D] px-[42px] py-3 text-center text-[16px] font-semibold text-white">
            Berhasil login! Selamat datang di marketplace 2ndTime.
          </div>
        )}

        <section
          className="h-[350px] bg-cover bg-center"
          style={{ backgroundImage: "url('/marketplace/hero-banner.jpg')" }}
          aria-label="Temukan Barang Preloved Berkualitas"
        />

        <section className="bg-white px-[42px] py-[56px]">
          <div className="mx-auto grid max-w-[1356px] grid-cols-9 gap-10">
            {categories.map((category) => (
              <Link key={category.name} href="/marketplace" className="flex flex-col items-center gap-3 text-[#2176B5] no-underline">
                <span className="flex h-[92px] w-[92px] items-center justify-center rounded-[20px] bg-[#F0F2F8] text-[42px] shadow-sm">
                  {category.icon}
                </span>
                <span className="text-center text-[16px] leading-[24px]">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#F0F2F8] px-[42px] py-[54px]">
          <div className="mx-auto max-w-[1356px]">
            <h1 className="mb-8 text-center text-[31px] font-semibold leading-[46px] text-[#2176B5]">
              Produk Terkini
            </h1>

            <div className="grid grid-cols-5 gap-x-6 gap-y-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="h-[40px] w-[125px] rounded-[50px] bg-[#FE7F2D] text-[12px] font-semibold text-white">
                Lebih Banyak
              </button>
            </div>
          </div>
        </section>
      </main>
    </MarketplaceShell>
  );
}
