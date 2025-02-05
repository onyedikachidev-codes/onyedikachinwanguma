import { Montserrat } from "next/font/google";

import "@/app/_styles/globals.css";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Head from "next/head";

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
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d5e7a020-2709-48bf-a9e7-890496e6553c"
        ></script>
      </Head>
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
