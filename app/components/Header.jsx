"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

 const menus = [
  { name: "Beranda", href: "/", width: "w-[69px]" },
  { name: "Tentang", href: "/about", width: "w-[67px]" },
  { name: "Services", href: "/services", width: "w-[69px]" },
  { name: "Kontak", href: "/contact", width: "w-[55px]" },
  { name: "Experiment", href: "/experiment", width: "w-[90px]" }, 
];

  return (
    <header className="flex h-[108px] w-[1440px] items-center justify-between gap-[191px] bg-[#F0F2F8] px-[42px] py-[24px]">
      {/* LOGO AREA */}
      <div className="mx-auto flex h-[60px] w-[192px] items-center gap-[10px]">
        <Link
          href="/"
          className="logo-font h-[60px] w-[64px] text-center text-[25px] font-normal leading-[30px] tracking-[0.12em] text-[#2176B5] no-underline"
        >
          2nd
          <br />
          Time
        </Link>
      </div>

      {/* MENU */}
      <nav className="mx-auto flex h-[40px] w-[356px] items-center justify-center gap-[32px]">
        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex h-[40px] ${menu.width} items-center justify-center gap-[10px] px-0 py-[8px] text-center text-[16px] leading-[24px] no-underline ${
                active
                  ? "border-b-2 border-[#FE7F2D] font-semibold text-[#2176B5]"
                  : "font-normal text-[#4B95C3]"
              }`}
            >
              {menu.name}
            </Link>
          );
        })}
      </nav>

      {/* BUTTON */}
      <Link
        href="/login"
        className="mx-auto flex h-[56px] w-[192px] items-center justify-center gap-[16px] rounded-[50px] border-2 border-[#FE7F2D] bg-white px-[32px] py-[16px] text-[16px] font-semibold leading-[24px] text-[#FE7F2D] no-underline hover:bg-[#F0F2F8] hover:text-[#FE7F2D] transition"
      >
        Mulai Sekarang
      </Link>
    </header>
  );
}