/* eslint-disable react/prop-types */
// import service1 from "../assets/images/S1.jpg"
// import service2 from "../assets/images/S2.jpg"
// import service3 from "../assets/images/S3.jpg"
// import service4 from "../assets/images/S4.jpg"
// import service5 from "../assets/images/S5.jpg"
// import service6 from "../assets/images/S6.jpg"
// import Clients from "./Clients"

import Clients from "@/components/Clients"

const Services = () => {
    const servicesData = [
        {
            image: "S1.jpg",
            title: "TESTING SERVICES",
            subTitlte: "E-cure provide a comprehensive range of laboratory testing",
            buttonText: "Read More",
            buttonLink: "/"
        },
        {
            image: "S2.jpg",
            title: "CALIBRATION SERVICES",
            subTitlte: "We provide a comprehensive range of monitoring, consultancy",
            buttonText: "Read More",
            buttonLink: "/"
        },
        {
            image: "S3.jpg",
            title: "LDAR STUDIES",
            subTitlte: "Noise health effects are both health and behavioural in nature",
            buttonText: "Read More",
            buttonLink: "/"
        },
        {
            image: "S4.jpg",
            title: "ENVIRONMENT CONSULTANCY SERVICES",
            subTitlte: "With today’s increasing demands on builders, developers,",
            buttonText: "Read More",
            buttonLink: "/"
        },
        {
            image: "S5.jpg",
            title: "TRAININGS, EVENTS & INTERNSHIP PROGRAMS",
            subTitlte: "We share our expertise through an extensive array of training",
            buttonText: "Read More",
            buttonLink: "/"
        },
        {
            image: "S6.jpg",
            title: "ANNUAL MAINTENANCE CONTRACTS",
            subTitlte: " E-cure provides Annual Environmental Maintenance",
            buttonText: "Read More",
            buttonLink: "/"
        },
    ]

    return (
        <div className="max-w-[1920px] mx-auto  py-8 px-10 my-10 rounded-md">
            <div className="text-center">
                <h1 className="text-3xl font-bold py-10"> Our Services</h1>
                <h1 className="text-[#5A5A5A] pb-4"> E-Cure Environment is an independent company offering high quality technical services in environmental consulting, water and wastewater treatment, field sampling, environmental testing and High quality ETP chemical.</h1>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-7">
                {
                    servicesData.map((service, index) => {
                        return (
                            <ServiceCardComponent
                                key={index}
                                image={service.image}
                                title={service.title}
                                subTitlte={service.subTitlte}
                                buttonText={service.buttonText}
                                buttonLink={service.buttonLink}
                            />)
                    })
                }

            </div>

        </div>
    )
}

export default Services


function ServiceCardComponent({
    image,
    title,
    subTitlte,
    buttonText,
    buttonLink
}) {
    return (
        <div className="shadow-md bg-[#F6FFF8] rounded-md overflow-hidden">
            <div className="px-4 py-4">
                <img src={image} className="rounded-md" />
            </div>

            <div className="  mb-4 text-left px-4 ">
                <h1 className="text-xl font-sans font-medium pb-2"> {title} </h1>
                <h3> {subTitlte} </h3>
                <button className=" text-white hover:bg-gray-200 font-medium hover:text-[#1B8733] bg-[#1B8733] py-2 px-3 mt-3 w-full rounded-md">{buttonText} </button>
            </div>
        </div>

    )
}