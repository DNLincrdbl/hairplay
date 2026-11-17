import localFont from "next/font/local";
import { Allura } from "next/font/google";

const switzer = localFont({
  src: [
    { path: "../app/fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/switzer-400i.woff2", weight: "400", style: "italic" },
    { path: "../app/fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/switzer-500i.woff2", weight: "500", style: "italic" },
    { path: "../app/fonts/switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/switzer-600i.woff2", weight: "600", style: "italic" },
    { path: "../app/fonts/switzer-700.woff2", weight: "700", style: "normal" },
    { path: "../app/fonts/switzer-700i.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export default switzer;
