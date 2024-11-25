"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/assets/logo.webp";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle state
  };
  
  return (
    <section className=" px-8  xl:px-16 py-4 xl:py-5 w-full flex  absolute ">
      <nav className="flex  items-center text-xl    w-full  justify-between ">
        <div className="flex gap-x-3  items-center ">
          <div className=" relative  w-[3rem] aspect-square h-[3rem]">

          <Image
            fill
            src={LogoImage}
            alt="GPdI"
            className=""
          />
          </div>
          {/* <p className="font-merriweather text-3xl font-bold hidden xl:block">
            GPdI Shekinah
          </p> */}
        </div>
        <ul className="hidden xl:flex xl:z-30 gap-x-8   ">
          <li className="hover:cursor-pointer hover:font-semibold">
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li className="hover:cursor-pointer hover:font-semibold">
            <Link href={"/about"}>About</Link>
          </li> */}
          <li className="hover:cursor-pointer hover:font-semibold">
            <Link href={"/Gallery"}>Gallery</Link>
          </li>
          {/* <li className="hover:cursor-pointer hover:font-semibold">
            <Link href={"/contact"}>Contact</Link>
          </li> */}
        </ul>

        <div  className="w-[10%] max-w-[2.5rem]  xl:hidden h-full  z-20 flex relative items-center justify-center">
        <nav className={`nav absolute top-12 -right-4  ${menuOpen ? "change z-10" : ""}`} >
        <ul className="font-Playfair_Display">
        <li>
            <Link href={"/"}>Home</Link>
          </li>
          {/* <li>
            <Link href={"/about"}>About</Link>
          </li> */}
          <li>
            <Link href={"/Gallery"}>Gallery</Link>
          </li>
          {/* <li>
            <Link href={"/contact"}>Contact</Link>
          </li> */}
        </ul>
      </nav>
      <div

        className={'  w-full h-full  flex items-center  flex-col z-10 justify-center  '}
        onClick={toggleMenu}
      >
        <div  className={`bar ${menuOpen ? 'rotate-[-45deg]  translate-y-[4px]' : ' translate-y-[-4px]'}`}></div>
        <div  className={`bar ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div  className={`bar ${menuOpen ? 'rotate-[45deg] translate-y-[-6px]' : 'translate-y-[4px]'}`}></div>
      </div>
      
      <div
        className={`menu-bg opacity-0 absolute   ${menuOpen ? 'change-bg opacity-100 blur-[3px] ' : ''}`}
      ></div>
    </div>
  
      </nav>
    </section>
  );
};

export default Navbar;
