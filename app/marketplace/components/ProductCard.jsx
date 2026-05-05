import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "../data";

export default function ProductCard({ product }) {
  const href = product.slug === "kemeja-coklat" ? "/marketplace/products/kemeja-coklat" : `/marketplace/products/${product.slug}`;

  return (
    <Link
      href={href}
      className="group block rounded-[20px] bg-white p-6 text-[#08497A] no-underline transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-5 flex items-center gap-3">
        <Image
          src={product.avatar}
          alt={product.seller}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div>
          <h3 className="text-[16px] font-semibold leading-[20px] text-[#2176B5]">{product.seller}</h3>
          <p className="text-[12px] leading-[16px] text-[#4B95C3]">{product.city}</p>
        </div>
      </div>

      <div className="relative mb-6 overflow-hidden rounded-[16px] bg-[#F0F2F8]">
        <Image
          src={product.image}
          alt={product.title}
          width={204}
          height={204}
          className="h-[204px] w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-0 rounded-tr-[20px] bg-[#FE7F2D] px-4 py-2 text-[12px] text-white">
          {product.condition}
        </span>
      </div>

      <h4 className="mb-2 text-[16px] font-semibold leading-[24px] text-[#2F6586]">{product.title}</h4>
      <p className="text-[20px] font-semibold leading-[30px] text-[#2176B5]">{formatRupiah(product.price)}</p>
    </Link>
  );
}
