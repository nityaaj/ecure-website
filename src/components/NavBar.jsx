// import { NavLink } from "react-router-dom";/
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="max-w-[1920px] mx-auto px-4 md:px-20 h-auto text-slate-900 shadow-sm sticky top-0  "
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.7px)",
        background: "rgba(255, 255, 255, 0.31)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className=" px-4">
          <img
            src="/logo.png"
            className="max-w-[154px] h-[60px] bg-transparent"
          />
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
          </div>
          <Link href={"/contact-us"}>
            <div className="">
              <button className="px-5 py-2 bg-[#1B8733] text-white rounded-lg">
                Contact Us
              </button>
            </div>
          </Link>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
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
            <div className="hidden bg-white w-60 h-60 absolute top-16 right-4 z-50 shadow-md">
              <div className="flex flex-col items-center gap-5">
                <Link href={"/"}> Home</Link>
                <Link href={"/#about"}> About Us</Link>
                <Link href={"/services"}> Services</Link>
                <Link href={"/#projects"}> Projects</Link>
                <Link href={"/gallery"}> Gallery</Link>
                <Link href={"/contact-us"}> Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
