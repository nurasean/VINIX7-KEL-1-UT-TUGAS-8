import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-[#F0F2F8] text-[#08497A]">
      <Hero />
      <Features />
      <JoinSection />
      <Reviews />
      <Membership />
    </main>
  );
}

/* ==== HERO ==== */
function Hero() {
  return (
    <section
      className="flex h-[913px] items-center bg-cover bg-center px-[42px]"
      style={{
        backgroundImage:
          "linear-gradient(73.71deg, rgba(0,0,0,0.65) 41.83%, rgba(102,102,102,0) 93.92%), url('/images/Hero home.png')",
      }}
    >
      <div className="w-[560px]">
        <h1 className="text-[39px] font-semibold leading-[58px] text-[#F0F2F8]">
          Jual Beli Barang Bekas dengan Aman & Transparan
        </h1>

        <p className="mt-4 text-[25px] leading-[38px] text-[#F0F2F8]">
          Hemat lebih banyak dengan barang second yang masih layak pakai dan
          terpercaya
        </p>

        <Link href="/login" className="mt-8 inline-flex h-[56px] w-[192px] items-center justify-center rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8] hover:bg-[#F0F2F8] hover:text-[#FE7F2D] transition">
          Mulai Sekarang
        </Link>
      </div>
    </section>
  );
}

/* ==== FEATURES ==== */
function Features() {
const features = [
  {
    title: "Update kondisi barang setiap minggu",
    desc: "Seller diwajibkan memperbarui kondisi barang secara berkala setiap minggu.",
    icon: "/icons/update.svg",
  },
  {
    title: "Sistem rating & trust seller",
    desc: "Seller memiliki sistem penilaian berdasarkan pengalaman buyer.",
    icon: "/icons/rating.svg",
  },
  {
    title: "Garansi refund dengan video unboxing",
    desc: "Buyer dapat mengajukan pengembalian dengan video unboxing.",
    icon: "/icons/refund.svg",
  },
  {
    title: "Transparansi kondisi produk",
    desc: "Setiap produk dilengkapi informasi kondisi yang jelas.",
    icon: "/icons/transparency.svg",
  },
];

  return (
    <section className="bg-[#F0F2F8] px-[42px] py-[72px]">
      <h2 className="text-center text-[39px] font-semibold leading-[58px] text-[#08497A]">
        Kenapa Pakai 2ndTime?
      </h2>

      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-2 gap-x-[96px] gap-y-[56px]">
        {features.map((item) => (
          <div key={item.title} className="flex gap-6">

            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px] bg-[#B8DDF2]">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
              />
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

/* ==== AYO GABUNG ===== */
function JoinSection() {
  return (
    <section className="bg-[#002643] px-[42px] py-[56px] text-[#F0F2F8]">
      <div className="mx-auto max-w-[1356px] text-center">
        <h2 className="text-[39px] font-semibold leading-[58px]">
          Ayo Gabung!
        </h2>

        <div className="mt-8 flex items-center justify-center gap-[71px]">
          <div className="flex w-[388px] flex-col items-center gap-6 text-center">
            <h3 className="text-[31px] font-semibold">
              Gabung Jadi Seller
            </h3>

            <p className="text-[20px] leading-[30px]">
              Jual barang yang sudah tidak terpakai dengan mudah dan cepat,
              sekaligus dapatkan penghasilan tambahan.
              <br />
              <br />
              Daripada terbuang, berikan kesempatan kedua untuk barang yang
              masih layak pakai dan bantu kurangi limbah.
            </p>

            <button className="h-[56px] w-[218px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8] hover:bg-[#F0F2F8] hover:text-[#FE7F2D] transition">
              Gabung Jadi Seller
            </button>
          </div>

          <div className="w-[370px]">
            <img src="/images/bg-frame-3405.png" alt="join" />
          </div>

          <div className="flex w-[388px] flex-col items-center gap-6 text-center ">
            <h3 className="text-[31px] font-semibold">
              Gabung Jadi Buyer
            </h3>

            <p className="text-[20px] leading-[30px]">
              Ingin barang berkualitas dengan harga ramah di kantong?
              <br />
              <br />
              Temukan barang bekas dengan harga lebih terjangkau dan kondisi
              yang transparan.
              <br />
              <br />
              Belanja jadi lebih aman dan terpercaya.
            </p>

            <button className="h-[56px] w-[220px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8] hover:bg-[#F0F2F8] hover:text-[#FE7F2D] transition">
              Gabung Jadi Buyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==== REVIEWS ==== */
function Reviews() {
  const reviews = [
    {
      name: "Jane Doe",
      role: "Buyer",
      title: "Recommended Banget!",
      desc: "Barangnya sesuai banget sama deskripsi, bahkan kondisinya masih bagus dan masih layak dipakai sehari-hari.",
      avatar: "/images/avatar-1.png",
    },
    {
      name: "Paul F.",
      role: "Buyer",
      title: "Listing transparan dan meyakinkan",
      desc: "Awalnya aku agak ragu buat beli barang second secara online karena takut tidak sesuai dengan foto.",
      avatar: "/images/avatar-2.png",
    },
    {
      name: "John Doe",
      role: "Seller",
      title: "Mudah mencari buyer saat saya BU.",
      desc: "Platform ini cukup mudah digunakan untuk menjual barang bekas. Proses upload produk tidak ribet.",
      avatar: "/images/avatar-3.png",
    },
    {
      name: "Sarah M.",
      role: "Seller",
      title: "Sistem trust score membuat buyer percaya.",
      desc: "Saya suka dengan adanya sistem trust score karena bisa meningkatkan kepercayaan buyer.",
      avatar: "/images/avatar-4.png",
    },
    {
      name: "Emily Y.",
      role: "Buyer",
      title: "Pilihan produk masih kurang banyak",
      desc: "Secara keseluruhan pengalaman belanja cukup baik, namun pilihan produknya masih bisa ditambah.",
      avatar: "/images/avatar-5.png",
    },
  ];

  return (
    <section className="bg-[#F0F2F8] px-[42px] py-[72px]">
      <div className="mx-auto grid max-w-[1356px] grid-cols-[330px_1fr] gap-[48px]">
        <div>
          <div className="relative h-[60px] w-[180px] mx-auto">
            <Image
              src="/2ndtime.png"
              alt="2ndTime Logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="mt-3 text-[31px] font-semibold leading-[42px] text-[#2C86C7] text-center">
            10,000 review
          </p>

          <p className="text-[20px] font-semibold leading-[30px] text-[#2C86C7] text-center">
            di Google Play
          </p>

          <p className="mt-6 text-[16px] leading-[24px] text-[#2C86C7] text-center">
            85% customer sangat puas dan meninggalkan review bintang 5
          </p>

          <div className="mt-5 space-y-3">
            {[85, 10, 5, 0, 0].map((value, index) => (
              <div
                key={index}
                className="grid grid-cols-[20px_1fr_40px] items-center gap-3 text-[14px] text-[#2F6586]"
              >
                <span>{5 - index}</span>
                <div className="h-[8px] rounded-full bg-[#D9D9D9]">
                  <div
                    className="h-[8px] rounded-full bg-[#FE7F2D]"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span>{value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[32px]">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[12px] border border-[#2C86C7] bg-[#F0F2F8] px-[18px] py-[16px]"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[16px] font-semibold leading-[20px]">
                      {review.name}
                    </h3>
                    <p className="text-[11px] leading-[14px] text-[#2F6586]">
                      {review.role}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-none text-[#FE7F2D]">★★★★★</p>
              </div>

              <h4 className="mb-3 text-center text-[18px] font-semibold leading-[24px]">
                “{review.title}”
              </h4>

              <p className="text-[12px] leading-[18px] text-[#2F6586]">
                {review.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-[16px] text-[#2C86C7]">
        see more ˅
      </p>
    </section>
  );
}

/* ==== MEMBERSHIP ==== */
function Membership() {
  return (
    <section className="bg-[#002643] px-[42px] py-[96px] text-[#F0F2F8]">
      <div className="mx-auto max-w-[1356px]">
        <h2 className="text-center text-[39px] font-semibold leading-[58px]">
          Dapatkan Lebih Dengan Member
        </h2>

        <div className="mx-auto mt-8 flex h-[62px] w-[240px] items-center justify-center rounded-[16px] bg-[#FE7F2D] text-[22px] font-semibold">
          Rp 20,000 / bulan
        </div>

        <div className="mt-[72px] grid grid-cols-2 items-start gap-x-[140px]">
          <div className="space-y-[56px] pt-4">
            <div>
              <h3 className="mb-5 text-center text-[22px] font-semibold leading-[32px]">
                Benefit Seller
              </h3>
              <p className="text-[18px] leading-[30px]">
                Listingmu naik ke atas supaya mudah dicari buyer. Buat
                listingmu lebih sering dilihat.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-center text-[22px] font-semibold leading-[32px]">
                Benefit Buyer
              </h3>
              <p className="text-[18px] leading-[30px]">
                Gratis ongkir dan voucher. Voucher tidak akan berpengaruh kepada
                pendapatan seller.
              </p>
            </div>
          </div>

          <form className="space-y-[28px]">
            <label className="block">
              <span className="mb-3 block text-[18px] font-semibold">
                Nama
              </span>
              <input
                type="text"
                placeholder="Masukkan Nama . . ."
                className="h-[56px] w-full rounded-[12px] border border-[#F0F2F8] bg-transparent px-5 text-[#F0F2F8] outline-none placeholder:text-[#F0F2F8]/60"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[18px] font-semibold">
                Email yang Telah Terdaftar di 2ndTime
              </span>
              <input
                type="email"
                placeholder="Masukkan Email . . ."
                className="h-[56px] w-full rounded-[12px] border border-[#F0F2F8] bg-transparent px-5 text-[#F0F2F8] outline-none placeholder:text-[#F0F2F8]/60"
              />
            </label>

            <div className="flex justify-center">
            <button
              type="button"
              className="mt-6 h-[56px] w-[190px] rounded-[50px] bg-[#FE7F2D] text-[16px] font-semibold text-[#F0F2F8] transition-all duration-300 hover:bg-white hover:text-[#FE7F2D]"
            >
              Daftar Sekarang
            </button>
          </div>

            <p className="pt-2 text-center text-[14px] leading-[20px] text-[#FE7F2D]">
              Lengkapi pembayaran dengan email yang kami kirim
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}