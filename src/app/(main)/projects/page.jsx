const Projects = () => {
    return (
        <div className="mx-auto max-w-[1920px] text-center my-20 ">
            <h1 className="text-3xl font-bold"> Our Projects </h1>
            <h1 className="text-[#5A5A5A] text-sm pt-4"> We offer a wide range of services, including environmental consulting, water and wastewater treatment, field sampling, environmental testing, and ETP chemical. We are committed to providing our clients with accurate and timely technical information, and we are also committed to environmentally responsible operations.</h1>

            <div className="basis-[100%] bg-[#F6FFF8] py-4 md:px-36 my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {Array.from({ length: 6 }).map((_, i) => <img key={i} src={`/project${i + 1}.png`} />)}
                </div>
            </div>


        </div>
    )
}

export default Projects
