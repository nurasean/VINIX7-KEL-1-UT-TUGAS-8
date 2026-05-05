import Image from "next/image";
import { Minus, Plus, Tag, Trash2 } from "lucide-react";
import { checkoutAction } from "../actions";
import MarketplaceShell from "../components/MarketplaceShell";
import SubmitButton from "../components/SubmitButton";
import { checkoutItems, formatRupiah, products } from "../data";

export default async function CheckoutPage({ searchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const productSlug = resolvedSearchParams?.product;

  const selectedProduct = productSlug
    ? products.find((item) => item.slug === productSlug)
    : null;

  const items = selectedProduct
    ? [
        {
          id: selectedProduct.slug,
          title: selectedProduct.title,
          seller: selectedProduct.seller,
          price: selectedProduct.price,
          image: selectedProduct.image,
        },
      ]
    : checkoutItems;

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const productNames = items.map((item) => item.title).join(", ");

  return (
    <MarketplaceShell>
      <main className="bg-[#F0F2F8] px-[42px] py-[42px]">
        <div className="mx-auto grid max-w-[1356px] grid-cols-2 gap-[42px]">
          {/* BAGIAN KIRI - LIST PRODUK */}
          <section className="rounded-[20px] bg-white px-6 py-5">
            <div className="space-y-8">
              {items.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  showDivider={index !== items.length - 1}
                />
              ))}
            </div>
          </section>

          {/* BAGIAN KANAN - ORDER SUMMARY */}
          <section className="rounded-[20px] bg-white px-6 py-5">
            <form
              action={checkoutAction}
              className="flex h-full flex-col justify-between gap-8"
            >
              <input type="hidden" name="name" value="User 2ndTime" />
              <input type="hidden" name="total" value={total} />
              <input type="hidden" name="payment" value="Transfer Bank" />
              <input type="hidden" name="product" value={productNames} />

              <div>
                <h1 className="mb-8 text-[31px] font-semibold leading-[46px] text-[#2176B5]">
                  Order
                </h1>

                <div className="space-y-6 text-[16px] leading-[24px]">
                  <OrderRow
                    label="Metode Pembayaran"
                    value="Transfer Bank"
                  />

                  <label className="flex items-center justify-between gap-6">
                    <span className="font-semibold text-[#2176B5]">
                      Alamat
                    </span>

                    <input
                      name="address"
                      defaultValue="Lorem ipsum"
                      className="w-[240px] rounded-[12px] border border-transparent px-3 py-2 text-right text-[#4B95C3] outline-none focus:border-[#2176B5]"
                    />
                  </label>

                  <OrderRow label="Produk" value={productNames} />
                  <OrderRow label="Total" value={formatRupiah(total)} />
                  <OrderRow label="Diskon" value="Rp 0,00" />
                  <OrderRow label="Ongkos Kirim" value="Rp 0,00" />
                </div>

                <div className="my-8 border-t border-black/10" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[16px] font-semibold text-[#2176B5]">
                    Total
                  </span>

                  <span className="text-[31px] font-semibold leading-[46px] text-[#4B95C3]">
                    {formatRupiah(total)}
                  </span>
                </div>

                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-[56px] flex-1 items-center gap-3 rounded-[50px] bg-[#F0F2F8] px-5">
                    <Tag className="h-6 w-6 text-black/40" />

                    <input
                      name="promoCode"
                      placeholder="Kode Promo"
                      className="w-full bg-transparent text-[16px] text-[#08497A] outline-none placeholder:text-black/40"
                    />
                  </div>

                  <button
                    type="button"
                    className="h-[56px] w-[112px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <SubmitButton
                pendingText="Memproses checkout..."
                className="h-[56px] w-full rounded-[50px] bg-[#2176B5] text-[16px] font-semibold text-white transition hover:bg-[#08497A]"
              >
                Checkout
              </SubmitButton>
            </form>
          </section>
        </div>
      </main>
    </MarketplaceShell>
  );
}

function CartItem({ item, showDivider }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.title}
          width={124}
          height={124}
          className="h-[124px] w-[124px] rounded-[16px] object-cover"
        />

        <div className="flex flex-1 items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-[16px] font-semibold leading-[24px] text-[#08497A]">
              {item.title}
            </h2>

            <div className="flex items-center gap-6 text-[13px] leading-[20px] text-[#4B95C3]">
              <strong>Kondisi</strong>

              <span className="rounded-[20px] bg-[#FE7F2D] px-4 py-1 text-[10px] text-white">
                Baik
              </span>
            </div>

            <div className="flex items-center gap-6 text-[13px] leading-[20px] text-[#4B95C3]">
              <strong>Penjual</strong>
              <span>{item.seller}</span>
            </div>

            <p className="text-[20px] font-semibold leading-[30px] text-[#2176B5]">
              {formatRupiah(item.price)}
            </p>
          </div>

          <div className="flex h-[124px] flex-col items-end justify-between">
            <button
              type="button"
              aria-label="hapus produk"
              className="text-[#DB0606]"
            >
              <Trash2 className="h-6 w-6" />
            </button>

            <div className="flex h-[44px] w-[129px] items-center justify-center gap-5 rounded-[62px] bg-[#F0F2F8] text-[#08497A]">
              <Minus className="h-5 w-5" />
              <span className="text-[14px]">1</span>
              <Plus className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {showDivider && <div className="mt-8 border-t border-black/10" />}
    </div>
  );
}

function OrderRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="font-semibold text-[#2176B5]">{label}</span>
      <span className="max-w-[280px] text-right text-[#4B95C3]">{value}</span>
    </div>
  );
}