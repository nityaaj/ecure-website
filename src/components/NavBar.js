// import { NavLink } from "react-router-dom";/
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="max-w-[1920px] mx-auto h-auto text-slate-900 shadow-sm">
            <div
                className="flex justify-between items-center"
            >
                <div className=" px-4">
                    <img src="logo.png" className="max-w-[154px] h-[60px] bg-transparent" />
                </div>
                <div className="my-2 px-4 flex items-center gap-5">
                    {/* <img src="../assets/image 19 Palette.png" className="flex justify-start w-[154px] h-[60px]"/> */}
                    <Link href={'/'}> Home</Link>
                    <Link href={'/about-us'}> About Us</Link>
                    <Link href={'/services'}> Services</Link>
                    <Link href={'/projects'}> Projects</Link>
                    <Link href={'/gallery'}> Gallery</Link>
                    <Link href={'/contact-us'}>
                        <button className=" py-2 px-2 shadow-sm bg-[#1B8733] rounded-md text-white"> Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
