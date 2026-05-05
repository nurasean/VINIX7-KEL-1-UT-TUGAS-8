import Link from "next/link";

export default function MarketplaceFooter() {
  return (
    <footer className="w-full bg-[#08497A] px-[42px] py-[42px] text-[#F0F2F8]">
      <div className="mx-auto grid max-w-[1356px] grid-cols-[220px_1px_220px_1px_280px_1px_260px] gap-16">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <Link href="/marketplace" className="logo-font text-[42px] leading-[50px] tracking-[0.12em] text-[#F0F2F8] no-underline">
            2nd
            <br />
            Time
          </Link>
          <p className="text-[12px] leading-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum tellus turpis.
          </p>
          <p className="text-[12px] font-semibold">© 2026 Kelompok 1 UT x VINIX7</p>
        </div>

        <Divider />
        <FooterMenu title="Menu" items={["Beranda", "Tentang"]} />
        <Divider />
        <FooterMenu
          title="Kategori"
          items={["Semua Kategori", "Gadget", "Handphone", "Jam", "Laptop", "Baju", "Celana", "Jaket", "Topi", "Sepatu"]}
          grid
        />
        <Divider />
        <FooterMenu title="Kontak" items={["Email : no@gmail.com", "Telp  : 08981234567"]} />
      </div>
    </footer>
  );
}

function Divider() {
  return <div className="h-full w-px bg-[#F0F2F8]" />;
}

function FooterMenu({ title, items, grid = false }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[20px] font-semibold leading-[30px]">{title}</h3>
      <div className={`${grid ? "grid grid-cols-2 gap-x-8" : "flex flex-col"} gap-y-4 text-[16px] leading-[24px]`}>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
