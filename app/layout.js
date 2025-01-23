import { Montserrat } from "next/font/google";

import "@/app/_styles/globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const mons = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Onyedikachi| Frontend Engineering Intern",
  },
  description:
    "A dedicated intern specializing in Frontend engineering. Connect with me to learn more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mons.className} antialiased min-h-screen bg-gray-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
