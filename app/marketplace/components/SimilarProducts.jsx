import ProductCard from "./ProductCard";
import { similarProducts } from "../data";

export default function SimilarProducts() {
  return (
    <section className="bg-[#F0F2F8] px-[42px] py-[54px]">
      <div className="mx-auto max-w-[1356px]">
        <h2 className="mb-8 text-center text-[31px] font-semibold leading-[46px] text-[#2176B5]">
          Produk Serupa
        </h2>
        <div className="grid grid-cols-5 gap-6">
          {similarProducts.map((product) => (
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
  );
}
