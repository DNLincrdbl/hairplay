import type { Metadata } from "next";
import switzer, { allura } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import JsonLd from "@/components/JsonLd";

const title = "Hairplay Fodrászat Szeged — vágás, festés, balayage";
const description =
  "Hairplay Fodrászat Szegeden, a Jósika utca 1-ben. Fazonvágás, tőfestés, balayage, fonás. Petra, Máríná és Dorina. Online időpontfoglalás.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hairplay.hu"),
  title: {
    default: title,
    template: "%s — Hairplay Szeged",
  },
  description,
  keywords: [
    "fodrászat Szeged",
    "Hairplay",
    "balayage Szeged",
    "hajfestés Szeged",
    "fazonvágás",
    "időpontfoglalás fodrász",
  ],
  authors: [{ name: "Hairplay Fodrászat" }],
  creator: "Hairplay Fodrászat",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://hairplay.hu",
    siteName: "Hairplay Fodrászat",
    title,
    description,
    images: [{ url: "/images/logo.png", width: 1139, height: 1139, alt: "Hairplay logó" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png", apple: "/apple-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${switzer.variable} ${allura.variable}`}>
      <body className="bg-ink text-paper antialiased">
        <JsonLd />
        <div
          id="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          aria-hidden
        >
          <img src="/images/logo.png" alt="" className="preloader-mark h-28 w-28 object-contain md:h-36 md:w-36" />
        </div>
        <Loader />
        <div className="noise" aria-hidden />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
