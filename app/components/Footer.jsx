export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F2F8] px-[42px] py-[42px]">
      <div className="mx-auto flex max-w-[1356px] flex-col gap-[50px]">
        <div className="border-t-2 border-[#2176B5]" />

        <div className="flex h-[148px] items-start gap-[74px]">
          {/* LOGO */}
          <div className="flex h-[148px] w-[218px] shrink-0 flex-col items-center justify-center gap-6">
            <div className="logo-font h-[100px] w-[106px] text-center text-[42px] leading-[50px] tracking-[0.12em] text-[#2176B5]">
              2nd
              <br />
              Time
            </div>

            <div className="flex h-[24px] w-[195px] items-center justify-center gap-2 text-[#2176B5]">
              <span className="text-[16px] font-medium leading-[24px]">©</span>
              <span className="text-[12px] font-semibold leading-[18px]">
                2026 Kelompok 1 UT x VINIX7
              </span>
            </div>
          </div>

          <FooterColumn title="Perusahaan" items={["Tentang", "Blog"]} width="w-[100px]" />
          <FooterColumn title="Gabung" items={["Seller", "Buyer"]} width="w-[100px]" />
          <FooterColumn title="Karir" items={["Pelajar", "Professional"]} width="w-[100px]" />
          <FooterColumn title="Hubungi Kami" items={["Bantuan", "Lokasi Kami"]} width="w-[116px]" />
          <FooterColumn
            title="Syarat dan Ketentuan"
            items={["Pemberitahuan Privasi", "Frequently Asked Questions"]}
            width="w-[227px]"
            boldItems
          />
        </div>

        <div className="border-t-2 border-[#2176B5]" />
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, width, boldItems = false }) {
  return (
    <div className={`flex h-[104px] ${width} shrink-0 flex-col items-start gap-4`}>
      <h5 className="m-0 h-[24px] w-full text-[16px] font-semibold leading-[24px] text-[#2176B5]">
        {title}
      </h5>

      {items.map((item) => (
        <p
          key={item}
          className={`m-0 h-[24px] w-full text-[16px] leading-[24px] text-[#2176B5] ${
            boldItems ? "font-semibold" : "font-normal"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}