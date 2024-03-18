import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import FseiUhbcHeader from "@/components/Headers/FseiUhbcHeader";
import Navbar from "@/components/Navbar";
import MenuBtn from "@/components/Buttons/MenuBtn";
import FseiHeader from "@/components/Headers/FseiHeader";
import UhbcHeader from "@/components/Headers/UhbcHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fsei uhbc",
  description: "fsei uhbc website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        <FseiUhbcHeader />
        <UhbcHeader />
        <FseiHeader />
        <Navbar />
        <div className="my-8 mx-5 md:hidden">
          <MenuBtn />
        </div>
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
