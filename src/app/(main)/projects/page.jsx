const Projects = () => {
    return (
        <div className="mx-auto max-w-[1920px] text-center my-20 ">
            <h1 className="text-3xl font-bold"> Our Projects </h1>
            <h1 className="text-[#5A5A5A] text-sm pt-4"> We offer a wide range of services, including environmental consulting, water and wastewater treatment, field sampling, environmental testing, and ETP chemical. We are committed to providing our clients with accurate and timely technical information, and we are also committed to environmentally responsible operations.</h1>

            <div className="flex pt-5">
                <div className="basis-[35%] bg-[#F6FFF8] h-fit flex flex-col px-5 py-5 gap-3 mr-5">
                    <button className=" hover:scale-100 hover:bg-[#1B8733] hover:text-white py-3 rounded-md"> E-Cure ERL </button>
                    <button className="hover:scale-100 hover:bg-[#1B8733] hover:text-white py-3 rounded-md"> E-Cure Environment Project & services</button>
                    <button className="hover:scale-100 hover:bg-[#1B8733] hover:text-white py-3 rounded-md"> OHM Associates</button>
                </div>

                <div className="basis-[65%] bg-[#F6FFF8] py-4 px-4">
                    <div className="grid grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => <img key={i} src={`/project${i + 1}.png`} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
