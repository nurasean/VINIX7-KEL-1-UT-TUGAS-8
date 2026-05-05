"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isPrototypePage = pathname === "/login" || pathname.startsWith("/marketplace");

  return (
    <>
      {!isPrototypePage && <Header />}
      {children}
      {!isPrototypePage && <Footer />}
    </>
  );
}
