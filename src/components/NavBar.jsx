// import { NavLink } from "react-router-dom";/
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="max-w-[1920px] mx-auto px-20 h-auto text-slate-900 shadow-sm sticky top-0  "
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.7px)",
        background: "rgba(255, 255, 255, 0.31)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className=" px-4">
          <img
            src="logo.png"
            className="max-w-[154px] h-[60px] bg-transparent"
          />
        </div>
        <div className="my-2 px-4 flex items-center gap-5">
          <section></section>
          {/* <img src="../assets/image 19 Palette.png" className="flex justify-start w-[154px] h-[60px]"/> */}
          <Link href={"/"}> Home</Link>
          <Link href={"/#about"}> About Us</Link>
          <Link href={"/services"}> Services</Link>
          <Link href={"/#projects"}> Projects</Link>
          <Link href={"/gallery"}> Gallery</Link>
          <Link href={"/contact-us"}>
            <div className="md:block hidden">
              <button className="px-5 py-2 bg-[#1B8733] text-white rounded-lg">
                Contact Us
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
