import Image from "next/image";
import Link from "next/link";
import { Bell, Bookmark, MessageCircle, Search, ShoppingCart } from "lucide-react";

const iconClass = "h-[30px] w-[30px] text-[#F0F2F8]";

export default function MarketplaceHeader() {
  return (
    <header className="w-full bg-[#2176B5] px-[42px] py-6 text-[#F0F2F8]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8">
        <Link
          href="/marketplace"
          className="logo-font flex h-[60px] w-[64px] items-center justify-center text-center text-[25px] leading-[30px] tracking-[0.12em] text-[#F0F2F8] no-underline"
        >
          2nd
          <br />
          Time
        </Link>

        <div className="flex flex-1 items-center gap-8">
          <div className="flex h-[57px] w-full max-w-[408px] items-center gap-4 rounded-[20px] bg-[#F7F8F0]/25 px-5">
            <Search className="h-[25px] w-[25px] shrink-0" />
            <span className="truncate text-[16px] leading-[24px]">
              Temukan Baju, Celana, dan lainnya. . .
            </span>
          </div>

          <Link href="/marketplace" className="flex items-center gap-3 text-[16px] text-[#F0F2F8] no-underline">
            <span className="grid h-[25px] w-[25px] grid-cols-2 gap-1" aria-hidden="true">
              <span className="rounded-sm bg-[#F0F2F8]" />
              <span className="rounded-sm bg-[#F0F2F8]" />
              <span className="rounded-sm bg-[#F0F2F8]" />
              <span className="rounded-sm bg-[#F0F2F8]" />
            </span>
            Semua Kategori
          </Link>
        </div>

        <nav className="flex items-center gap-6" aria-label="Menu marketplace">
          <Link href="/marketplace" aria-label="Favorit">
            <Bookmark className={iconClass} />
          </Link>
          <Link href="/marketplace/checkout" aria-label="Keranjang">
            <ShoppingCart className={iconClass} />
          </Link>
          <Link href="/marketplace/chat" className="relative" aria-label="Chat Seller">
            <MessageCircle className={iconClass} />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#DB0606]" />
          </Link>
          <Link href="/marketplace" className="relative" aria-label="Notifikasi">
            <Bell className={iconClass} />
            <span className="absolute right-1 top-0 h-2 w-2 rounded-full bg-[#DB0606]" />
          </Link>
          <Link href="/marketplace" aria-label="Profil" className="block h-[60px] w-[60px] overflow-hidden rounded-full bg-white/20">
            <Image
              src="/images/avatar-4.png"
              alt="Profil pengguna"
              width={60}
              height={60}
              className="h-full w-full object-cover"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
