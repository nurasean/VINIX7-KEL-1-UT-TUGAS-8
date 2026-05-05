import { Poppins, Zilla_Slab_Highlight } from "next/font/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const zilla = Zilla_Slab_Highlight({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zilla",
});

export const metadata = {
  title: "2ndTime",
  description: "Marketplace barang bekas yang aman dan terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${zilla.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
