import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-[#F0F2F8]">
      {/* HERO */}
      <section
        className="flex h-[913px] items-center bg-cover bg-center px-[42px]"
        style={{
          backgroundImage:
            "linear-gradient(73.71deg, rgba(0,0,0,0.65) 41.83%, rgba(102,102,102,0) 93.92%), url('/images/contact-hero.png')",
        }}
      >
        <div className="w-[501px]">
          <h1 className="text-[39px] font-semibold leading-[58px] text-[#F0F2F8]">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-[25px] leading-[38px] text-[#F0F2F8]">
            Jika Anda memiliki pertanyaan, masukan, atau kendala, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
          </p>
        </div>
      </section>

      {/* KONTAK */}
      <section className="mx-auto flex max-w-[1440px] items-center justify-between gap-[80px] px-[42px] py-[72px]">
        {/* KIRI */}
        <div className="w-[420px] shrink-0">
          <h2 className="text-[32px] font-semibold text-[#08497A]">
            Kontak Kami
          </h2>

          <div className="mt-6 space-y-5 text-[16px] leading-[24px] text-[#2F6586]">
            <div>
              <p className="text-[18px] font-semibold text-[#08497A]">Email</p>
              <p>support@2ndtime.com</p>
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#08497A]">
                Telepon / WhatsApp
              </p>
              <p>+62 812-3456-7890</p>
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#08497A]">
                Alamat
              </p>
              <p>Jl. Lorem Ipsum No. 123, Jakarta, Indonesia</p>
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#08497A]">
                Jam Operasional
              </p>
              <p>Senin - Jumat: 09.00 - 18.00</p>
              <p>Sabtu - Minggu: 10.00 - 15.00</p>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="relative h-[360px] w-[780px] overflow-hidden rounded-[16px]">
          <Image
            src="/images/contact-image.png"
            alt="Customer Support"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="flex h-[120px] w-full items-center justify-center bg-[#002643] px-5 text-center text-[#F0F2F8] md:h-[180px] md:px-10">
          <h2 className="text-[24px] font-semibold md:text-[32px]">
            FAQ (Frequently Asked Questions)
          </h2>
        </div>

        <div className="mx-auto max-w-[1350px] px-6 py-10 md:px-12 text-[#08497A] md:px-[42px] md:py-[60px]">
          <FAQSection
            title="Umum"
            startNumber={1}
            items={[
              {
                q: "Apa itu platform ini?",
                a: "Platform ini adalah marketplace untuk jual beli barang bekas (preloved) yang mengutamakan transparansi kondisi barang dan keamanan transaksi antara buyer dan seller.",
              },
              {
                q: "Apakah semua barang di sini adalah barang bekas?",
                a: "Semua barang adalah barang bekas yang masih layak pakai, namun tetap dalam kondisi yang dijelaskan secara transparan oleh seller.",
              },
            ]}
          />

          <FAQSection
            title="Untuk Buyer"
            startNumber={3}
            items={[
              {
                q: "Bagaimana saya tahu kondisi barang yang sebenarnya?",
                a: "Setiap produk memiliki deskripsi kondisi yang jelas serta riwayat update berkala dari penjual, sehingga Anda bisa melihat kondisi terbaru sebelum membeli.",
              },
              {
                q: "Apa itu video unboxing dan kenapa penting?",
                a: "Video unboxing adalah rekaman saat Anda membuka paket pertama kali. Ini digunakan sebagai bukti jika barang yang diterima tidak sesuai deskripsi.",
              },
              {
                q: "Bagaimana jika barang yang saya terima tidak sesuai?",
                a: "Anda dapat mengajukan pengembalian dengan menyertakan video unboxing sebagai bukti.",
              },
            ]}
          />

          <FAQSection
            title="Untuk Seller"
            startNumber={6}
            items={[
              {
                q: "Apakah saya harus mengupdate kondisi barang setiap minggu?",
                a: "Ya, penjual diwajibkan untuk memperbarui kondisi barang secara berkala agar informasi tetap akurat.",
              },
              {
                q: "Apa yang terjadi jika saya tidak mengupdate kondisi barang?",
                a: "Listing Anda bisa dinonaktifkan sementara hingga dilakukan update kondisi.",
              },
            ]}
          />

          <FAQSection
            title="Membership"
            startNumber={8}
            items={[
              {
                q: "Apa keuntungan menjadi member?",
                a: "Member mendapatkan berbagai keuntungan seperti prioritas listing untuk penjual, serta voucher gratis ongkir dan promo eksklusif untuk pembeli.",
              },
              {
                q: "Berapa biaya membership?",
                a: "Biaya membership adalah Rp20.000 per bulan.",
              },
              {
                q: "Apakah membership wajib?",
                a: "Tidak. Anda tetap bisa menggunakan platform tanpa membership, namun fitur premium hanya tersedia untuk member.",
              },
            ]}
          />

          <FAQSection
            title="Keamanan dan Transaksi"
            startNumber={11}
            items={[
              {
                q: "Apakah platform ini aman digunakan?",
                a: "Kami menyediakan fitur seperti sistem rating, update kondisi barang, dan garansi video unboxing untuk meningkatkan keamanan transaksi.",
              },
              {
                q: "Bagaimana cara menghubungi customer support?",
                a: "Anda dapat menghubungi kami melalui email, telepon, atau WhatsApp.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}

function FAQSection({ title, items, startNumber }) {
  return (
    <div className="mb-10">
      <h3 className="mb-5 text-[22px] font-semibold text-[#08497A]">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item, index) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold leading-[24px] text-[#08497A] md:text-[18px]">
              <span>
                {startNumber + index}. {item.q}
              </span>
              <span className="text-[20px] transition group-open:rotate-180">
                ^
              </span>
            </summary>

            <p className="mt-2 text-[14px] leading-[22px] text-[#2F6586] md:text-[15px]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}