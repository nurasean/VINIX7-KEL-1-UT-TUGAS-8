import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#F0F2F8]">
      {/* HERO */}
      <section
        className="flex h-[913px] items-center bg-cover bg-center px-[42px]"
        style={{
          backgroundImage:
            "linear-gradient(73.71deg, rgba(0,0,0,0.65) 41.83%, rgba(102,102,102,0) 93.92%), url('/images/bg-frame-3440.jpg')",
        }}
      >
        <div className="w-[501px]">
          <h1 className="text-[39px] font-semibold leading-[58px] text-[#F0F2F8]">
            Cerita Kami
          </h1>
          <p className="mt-4 text-[25px] leading-[38px] text-[#F0F2F8]">
            Kami percaya bahwa setiap barang masih memiliki nilai dan bisa
            digunakan kembali oleh orang lain.
          </p>
        </div>
      </section>

      {/* TENTANG */}
      <section className="flex items-center gap-16 px-[42px] py-[72px]">
        <div className="w-[547px]">
          <h2 className="text-[39px] font-semibold leading-[58px] text-[#08497A]">
            Tentang Kami
          </h2>
          <p className="mt-4 text-[20px] leading-[30px] text-[#2F6586]">
            Kami adalah platform marketplace yang berfokus pada jual beli barang
            bekas dengan sistem yang lebih aman, transparan, dan terpercaya.
            Kami percaya bahwa setiap barang masih memiliki nilai dan bisa
            digunakan kembali oleh orang lain.
            <br /><br />
            Dimulai dari banyaknya masalah dalam transaksi barang bekas, seperti
            kondisi barang yang tidak sesuai, kurangnya kepercayaan, dan
            minimnya perlindungan bagi pembeli, kami menghadirkan solusi dengan
            fitur yang memastikan kejelasan kondisi produk dan keamanan
            transaksi.
          </p>
        </div>

        <div className="relative h-[435px] flex-1 overflow-hidden rounded-[20px]">
          <Image
            src="/images/bg-frame-3436.jpg"
            alt="Tentang"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MISI */}
      <section className="bg-[#002643] px-[42px] py-14 text-[#F0F2F8]">
        <div className="text-center">
          <h2 className="text-[39px] font-semibold leading-[58px]">
            Misi Kami
          </h2>
          <p className="mt-4 text-[20px] leading-[30px]">
            Membantu menciptakan ekosistem jual beli barang bekas yang lebih
            jujur, dan aman, sekaligus mengurangi limbah dengan memberi
            “kesempatan kedua” pada barang yang masih layak pakai.
          </p>
        </div>

        <div className="relative mt-8 h-[522px] overflow-hidden rounded-[20px]">
          <Image
            src="/images/bg-frame-3437.jpg"
            alt="Misi"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* KELEBIHAN */}
      <section className="flex items-center gap-16 px-[42px] py-[72px]">
        <div className="w-[547px]">
          <h2 className="text-[39px] font-semibold leading-[58px] text-[#08497A]">
            Kelebihan Kami
          </h2>

          <ul className="mt-4 list-disc pl-6 text-[20px] leading-[30px] text-[#2F6586]">
            <li>Transparansi kondisi barang melalui update berkala</li>
            <li>Sistem garansi dengan video unboxing</li>
            <li>Lingkungan jual beli yang lebih aman dan terpercaya</li>
            <li>Mendukung gaya hidup yang lebih ramah lingkungan</li>
          </ul>
        </div>

        <div className="relative h-[285px] flex-1 overflow-hidden rounded-[20px]">
          <Image
            src="/images/bg-frame-3438.jpg"
            alt="Kelebihan"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* AYO GABUNG */}
      <section className="bg-[#002643] px-[42px] py-[56px] text-[#F0F2F8]">
        <div className="mx-auto max-w-[1356px] text-center">

          {/* TITLE */}
          <h2 className="text-[39px] font-semibold leading-[58px] text-[#F0F2F8]">
            Ayo Gabung!
          </h2>

          {/* CONTENT */}
          <div className="mt-8 flex items-center justify-center gap-[71px]">

            {/* SELLER */}
            <div className="flex w-[388px] flex-col items-center gap-6 text-center">
              <h3 className="text-[31px] font-semibold text-[#F0F2F8]">
                Gabung Jadi Seller
              </h3>

              <p className="text-[20px] leading-[30px] text-[#F0F2F8]">
                Jual barang yang sudah tidak terpakai dengan mudah dan cepat,
                sekaligus dapatkan penghasilan tambahan.
                <br /><br />
                Daripada terbuang, berikan kesempatan kedua untuk barang yang
                masih layak pakai dan bantu kurangi limbah.
              </p>

              <button className="h-[56px] w-[218px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8]">
                Gabung Jadi Seller
              </button>
            </div>

            {/* GAMBAR */}
            <div className="w-[370px]">
              <img src="/images/bg-frame-3405.png" alt="join" />
            </div>

            {/* BUYER */}
            <div className="flex w-[388px] flex-col items-center gap-6 text-center">
              <h3 className="text-[31px] font-semibold text-[#F0F2F8]">
                Gabung Jadi Buyer
              </h3>

              <p className="text-[20px] leading-[30px] text-[#F0F2F8]">
                Ingin barang berkualitas dengan harga ramah di kantong?
                <br /><br />
                Temukan barang bekas dengan harga lebih terjangkau dan kondisi
                yang transparan.
                <br /><br />
                Belanja jadi lebih aman dan terpercaya.
              </p>

              <button className="h-[56px] w-[220px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8]">
                Gabung Jadi Buyer
              </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}