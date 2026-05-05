import MemberForm from "../components/MemberForm";
import services from "../data/services.json";

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F0F2F8]">
      {/* HERO */}
      <section
        className="flex h-[913px] w-full items-center bg-cover bg-center px-[42px]"
        style={{
          backgroundImage:
            "linear-gradient(73.71deg, rgba(0,0,0,0.65) 41.83%, rgba(102,102,102,0) 93.92%), url('/images/bg-frame-3440-2.jpg')",
        }}
      >
        <div className="w-[501px]">
          <h1 className="text-[39px] font-semibold leading-[58px] text-[#F0F2F8]">
            Services
          </h1>
          <p className="mt-4 text-[25px] leading-[38px] text-[#F0F2F8]">
            Kami menyediakan berbagai fitur untuk mendukung pengalaman jual beli
            barang bekas yang lebih baik, baik untuk seller maupun buyer.
          </p>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="w-full px-[42px] py-[72px]">
        <div className="mx-auto flex max-w-[1356px] items-center gap-[64px]">
          <div className="w-[547px]">
            <h2 className="text-[39px] font-semibold leading-[58px] text-[#08497A]">
              Layanan Kami
            </h2>

            <div className="mt-4 flex flex-col gap-4">
              {services.map((item) => (
                <div key={item.id}>
                  <h3 className="text-[25px] font-semibold leading-[38px] text-[#2F6586]">
                    {item.title}
                  </h3>
                  <p className="text-[20px] leading-[30px] text-[#2F6586]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/images/bg-frame-3436-2.jpg"
            alt="services"
            className="h-[515px] w-[743px] rounded-[20px] object-cover"
          />
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="w-full bg-[#002643] px-[42px] py-[56px] text-[#F0F2F8]">
        <div className="mx-auto max-w-[1356px]">
          <div className="mx-auto flex w-fit flex-col items-center gap-4">
            <h1 className="whitespace-nowrap text-center text-[39px] font-semibold leading-[58px]">
              Dapatkan Lebih Dengan Member
            </h1>

            <div className="flex h-[70px] w-[249px] items-center justify-center rounded-[20px] bg-[#FE7F2D]">
              <span className="text-[25px] font-semibold leading-[38px]">
                Rp 20,000 /bulan
              </span>
            </div>
          </div>

          <div className="mt-[56px] flex items-start gap-[80px]">
            <div className="flex w-[543px] flex-col gap-[56px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-center text-[25px] font-semibold leading-[38px]">
                  Benefit Seller
                </h3>
                <p className="text-[20px] leading-[30px]">
                  Listing produk diprioritaskan dan muncul lebih atas
                  <br />
                  Produk lebih sering dilihat oleh calon pembeli
                  <br />
                  Meningkatkan peluang barang terjual lebih cepat
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-center text-[25px] font-semibold leading-[38px]">
                  Benefit Buyer
                </h3>
                <p className="text-[20px] leading-[30px]">
                  Voucher gratis ongkir
                  <br />
                  Berbagai promo dan voucher eksklusif
                  <br />
                  Lebih hemat saat berbelanja
                  <br />
                  (Voucher tidak akan berpengaruh kepada pendapatan seller.)
                </p>
              </div>
            </div>

            <div className="w-[733px]">
              <MemberForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}