"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <div
      className="max-w-[1920px] mx-auto px-4 md:px-20 h-auto text-slate-900 shadow-sm sticky top-0 w-full z-50"
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.7px)",
        background: "rgba(255, 255, 255, 0.31)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="px-4">
          <Link href={"/"}>
            <img
              src="/logo.png"
              className="max-w-[154px] h-[60px] bg-transparent"
            />
          </Link>
        </div>
        <div
          className="flex justify-between items-center"
          style={{ gap: "1.5rem" }}
        >
          <div className="my-2 px-4 items-center gap-5 hidden md:flex">
            {/* <section></section> */}
            {/* <img src="../assets/image 19 Palette.png" className="flex justify-start w-[154px] h-[60px]"/> */}
            <Link href={"/"}> Home</Link>
            <Link href={"/#about"}> About Us</Link>
            <Link href={"/services"}> Services</Link>
            <Link href={"/#projects"}> Projects</Link>
            <Link href={"/gallery?type=All"}> Gallery</Link>
            <Link href={"/green-earth"}>Green Earth</Link>
          </div>
          <Link href={"/contact-us"}>
            <div className="">
              <button className="px-5 py-2 bg-[#1B8733] text-white rounded-lg hidden sm:block">
                Contact Us
              </button>
            </div>
          </Link>
          <div
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {!showMobileMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer button"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
            {showMobileMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer button"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {/* <div
              className={
                "md:hidden bg-white w-3/4 sm:w-1/2 h-[350px] absolute top-[60px] z-50 shadow-md py-5 transition-all duration-500 ease-in-out " +
                (showMobileMenu ? "visible right-0 " : "hidden -right-full")
              }
            >
              <div className="flex flex-col items-center gap-5">
                <Link href={"/"} > Home</Link>
                <Link href={"/#about"} > About Us</Link>
                <Link href={"/services"}> Services</Link>
                <Link href={"/#projects"}> Projects</Link>
                <Link href={"/gallery"}> Gallery</Link>
                <Link href={"/contact-us"}> Contact Us</Link>
              </div>
            </div> */}
            <div>
              <motion.nav
                variants={variants}
                animate={showMobileMenu ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                initial="closed"
                className={
                  "fixed top-[60px] right-0 h-[calc(100vh-60px)] w-64 bg-white shadow-md z-10 " +
                  (showMobileMenu ? "visible" : "hidden")
                }
              >
                <div className="flex flex-col items-center gap-5 py-10">
                  <Link href={"/"}> Home</Link>
                  <Link href={"/#about"}> About Us</Link>
                  <Link href={"/services"}> Services</Link>
                  <Link href={"/#projects"}> Projects</Link>
                  <Link href={"/gallery?type=All"}> Gallery</Link>
                  <Link href={"/contact-us"}> Contact Us</Link>
                  <Link href={"/green-earth"}> Green Earth</Link>
                </div>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
