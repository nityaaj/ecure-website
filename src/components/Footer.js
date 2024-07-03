// import logo from "../assets/images/logo.png"
// import footer1 from "../assets/images/f1.png"
// import footer2 from "../assets/images/f2.png"
// import footer3 from "../assets/images/f3.png"
// import footer4 from "../assets/images/f4.webp"

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1920px] h-auto bg-[#F6FFF8] text-slate-900">

            <div className="flex justify-between items-center">
                <div className=" px-4">
                    <img src="logo.png" className="max-w-[154px] h-[60px] bg-transparent" />
                </div>

                <div className="text-sm">
                    {/* © Copyright 2023, All Rights Reserved by E-Cure Environment */}
                    <img src="f4.webp" className="bg-[#F6FFF8]" />

                </div>

                <div className="my-2 px-4 flex gap-3">
                    <img src="f1.png" />
                    <img src="f2.png" />
                    <img src="f3.png" />
                </div>
            </div>

        </div>
    )
}

export default Footer
