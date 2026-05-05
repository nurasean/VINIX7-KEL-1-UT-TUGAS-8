import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import MarketplaceShell from "../../components/MarketplaceShell";
import SimilarProducts from "../../components/SimilarProducts";
import { featuredProduct, formatRupiah, products } from "../../data";

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await Promise.resolve(params);

  const marketplaceProduct = products.find(
    (item) => item.slug === resolvedParams?.slug
  );

  const product =
    resolvedParams?.slug === featuredProduct.slug || !marketplaceProduct
      ? featuredProduct
      : {
          ...featuredProduct,
          ...marketplaceProduct,
          image: marketplaceProduct.image,
          thumbnails: [
            marketplaceProduct.image,
            featuredProduct.thumbnails[1],
            featuredProduct.thumbnails[2],
            featuredProduct.thumbnails[3],
          ],
          seller: marketplaceProduct.seller,
        };

  const checkoutHref = `/marketplace/checkout?product=${
    product.slug || resolvedParams?.slug
  }`;

  return (
    <MarketplaceShell>
      <main className="bg-white">
        <section className="mx-auto max-w-[1440px] px-[42px] py-[42px]">
          <div className="mb-8 flex items-center gap-3 text-[14px] text-[#4B95C3]">
            <Link href="/marketplace" className="text-[#4B95C3] no-underline">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>Kategori</span>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-[#2176B5]">
              {product.category || "Baju"}
            </span>
          </div>

          <div className="grid grid-cols-[460px_1fr] gap-12">
            <div>
              <div className="mb-6 overflow-hidden rounded-[20px] bg-[#F0F2F8]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={460}
                  height={449}
                  className="h-[449px] w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-6">
                {product.thumbnails.map((thumb, index) => (
                  <div
                    key={`${thumb}-${index}`}
                    className={`overflow-hidden rounded-[14px] border ${
                      index === 0 ? "border-[#2176B5]" : "border-[#A5C9E5]"
                    }`}
                  >
                    <Image
                      src={thumb}
                      alt={`${product.title} ${index + 1}`}
                      width={98}
                      height={88}
                      className="h-[88px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h1 className="text-[25px] font-semibold leading-[38px] text-[#2176B5]">
                    {product.title}
                  </h1>

                  <p className="mt-2 text-[31px] font-semibold leading-[46px] text-[#08497A]">
                    {formatRupiah(product.price)}
                  </p>
                </div>

                <p className="mt-6 text-[14px] text-[#FE7F2D]">
                  200 Orang Tertarik
                </p>
              </div>

              <div className="mb-8 flex items-center gap-6">
                <span className="text-[16px] font-semibold text-[#2176B5]">
                  Status
                </span>

                <span className="rounded-[50px] bg-[#FE7F2D] px-6 py-3 text-[14px] text-white">
                  {product.condition}
                </span>
              </div>

              <div className="mb-14">
                <h2 className="mb-4 text-[16px] font-semibold text-[#2176B5]">
                  Deskripsi
                </h2>

                <p className="max-w-[840px] text-[16px] leading-[24px] text-[#4B95C3]">
                  Lorem ipsum dolor sit amet consectetur. Eget orci velit arcu
                  nulla sit penatibus eget cras ornare. Tortor felis diam
                  parturient nunc fusce. Facilisis vulputate lectus ut accumsan
                  mattis nisl at. Eu lorem mi diam tincidunt nullam morbi diam
                  malesuada. Massa in arcu congue nibh faucibus imperdiet posuere
                  pretium amet.
                  <br />
                  Gravida porttitor vestibulum ante nullam. Odio purus vitae
                  rutrum at arcu aenean quis est gravida. Orci leo id lectus
                  vestibulum. Adipiscing nibh elit dolor praesent massa aliquet
                  vitae.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <Link
                  href={checkoutHref}
                  className="flex h-[88px] items-center justify-center rounded-[50px] border-2 border-[#FE7F2D] text-[25px] font-semibold text-[#FE7F2D] no-underline transition hover:bg-[#FE7F2D] hover:text-white"
                >
                  Keranjang
                </Link>

                <Link
                  href={checkoutHref}
                  className="flex h-[88px] items-center justify-center rounded-[50px] bg-[#FE7F2D] text-[25px] font-semibold text-white no-underline transition hover:bg-[#2176B5]"
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="mb-8 text-[20px] font-semibold text-[#2176B5]">
              Spesifikasi
            </h2>

            <div className="grid grid-cols-4 gap-10 text-[16px] leading-[24px]">
              <Spec label="Stok" value={product.stock || 1} />
              <Spec label="Kategori" value={product.category || "Baju"} />
              <Spec label="Garansi" value="7 hari" />
              <Spec label="Transaksi" value="COD dan Transfer" />
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-8 text-[20px] font-semibold text-[#08497A]">
              Profil Seller
            </h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Image
                  src={product.avatar || featuredProduct.avatar}
                  alt={product.seller}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold text-[#08497A]">
                      {product.seller}
                    </h3>

                    <Star className="h-4 w-4 fill-[#FE7F2D] text-[#FE7F2D]" />

                    <span className="text-[12px] text-[#4B95C3]">
                      {product.rating || "4,7 (89)"}
                    </span>
                  </div>

                  <p className="mt-2 text-[12px] text-[#4B95C3]">
                    {product.city || "Jakarta"}
                  </p>

                  <p className="mt-2 text-[12px] text-[#4B95C3]">
                    Terakhir online 2 hari lalu
                  </p>
                </div>

                <div className="ml-8 grid grid-cols-2 gap-x-10 gap-y-4 text-[14px] text-[#2176B5]">
                  <strong>Bergabung</strong>
                  <span>11 bulan lalu</span>

                  <strong>Produk</strong>
                  <span>8 Produk</span>
                </div>
              </div>

              <Link
                href="/marketplace/chat"
                className="flex h-[56px] w-[176px] items-center justify-center rounded-[50px] border-2 border-[#FE7F2D] text-[16px] font-semibold text-[#FE7F2D] no-underline transition hover:bg-[#FE7F2D] hover:text-white"
              >
                Chat Seller
              </Link>
            </div>
          </section>
        </section>

        <SimilarProducts />
      </main>
    </MarketplaceShell>
  );
}

function Spec({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <strong className="text-[#2176B5]">{label}</strong>
      <span className="text-[#4B95C3]">{value}</span>
    </div>
  );
}