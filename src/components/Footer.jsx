// import logo from "../assets/images/logo.png"
// import footer1 from "../assets/images/f1.png"
// import footer2 from "../assets/images/f2.png"
// import footer3 from "../assets/images/f3.png"
// import footer4 from "../assets/images/f4.webp"

import Image from "next/image"

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1920px] h-auto bg-[#F6FFF8] text-slate-900 md:">

            <div className="flex flex-col md:flex-row justify-between items-center"> 
                <div className=" px-4">
                    <img src="/logo.png" className="max-w-[154px] h-[60px] bg-transparent" />
                </div>

                <div className="text-sm h-[60px] w-[154px] hidden md:block">
                    {/* © Copyright 2023, All Rights Reserved by E-Cure Environment */}
                    <Image
                        src="/make-india-logo.png"
                        className="h-[60px] max-w-[154px]"
                        width={140}
                        height={60}
                        objectFit="cover"
                    />
                </div>

                <div className="my-2 px-4  gap-3 hidden md:flex">
                    <img src="/f1.png" />
                    <img src="/f2.png" />
                    <img src="/f3.png" />
                </div>
            </div>

        </div>
    )
}

export default Footer
