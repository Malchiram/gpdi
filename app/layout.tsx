import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import type { Metadata } from "next";
import "./globals.css";


// export const metadata: Metadata = {
//   title: "GPdI Shekinah",
//   description: "Welcome to GPdI SHekinah",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`min-h-screen  h-full flex flex-col `}
      >
        <header className="relative overflow-hidden ">
      <Navbar />
          <Hero />
        </header>
        <main className="flex-1  h-full ">
        {children}
        </main>
        <footer className="relative border-t-2 border-t-slate-600 flex">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
