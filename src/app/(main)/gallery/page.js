// import pic1 from "../assets/images/g1.png"
// import pic2 from "../assets/images/g2.png"
// import pic3 from "../assets/images/g3.png"
// import pic4 from "../assets/images/g4.png"
// import pic5 from "../assets/images/g5.png"
// import pic6 from "../assets/images/g6.png"
// import pic7 from "../assets/images/g7.png"
// import pic8 from "../assets/images/g8.png"
// import pic9 from "../assets/images/g9.png"


const Gallery = () => {
    return (
        <div className="max-w-[1920] mx-auto text-center my-20">
            <h1 className="font-bold text-3xl pb-8"> Gallery</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                {Array.from({ length: 5 }).map((_, i) => <img key={i} src={`g${i + 1}.png`}
                    className={i == 0 ? "md:row-span-2 md:col-span-2 w-full" : "w-full"} />)}
            </div>

            <div className="mt-8">
                <button
                    className="bg-[#588157] text-white font-medium text-md rounded-md py-2 md:w-96 w-full hover:bg-gray-400">
                    See More..
                </button>
            </div>
        </div>
    )
}

export default Gallery
