/* eslint-disable react/prop-types */
// import service1 from "../assets/images/S1.jpg"
// import service2 from "../assets/images/S2.jpg"
// import service3 from "../assets/images/S3.jpg"
// import service4 from "../assets/images/S4.jpg"
// import service5 from "../assets/images/S5.jpg"
// import service6 from "../assets/images/S6.jpg"
// import Clients from "./Clients"
import Link from "next/link";
import { getFeaturedServicesList } from "../../../sanity/sanity.query";

const Services = async () => {
  const featuredServices = await getFeaturedServicesList();
  return (
    <div className="mx-auto rounded-md mb-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-10"> Our Services</h1>
        <h1 className="text-[#5A5A5A] pb-4">
          {" "}
          E-Cure Environment is an independent company offering high quality
          technical services in environmental consulting, water and wastewater
          treatment, field sampling, environmental testing and High quality ETP
          chemical.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredServices.map((service, index) => {
          return (
            <ServiceCardComponent
              key={index}
              image={service.imageUrl}
              title={service.title}
              subTitlte={service.description}
              buttonText="Read More"
              buttonLink={`/services/${service.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;

function ServiceCardComponent({
  image,
  title,
  subTitlte,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="shadow-md bg-[#F6FFF8] rounded-md overflow-hidden">
      <div className="px-4 py-4">
        <img src={image} className="rounded-md" />
      </div>

      <div className="  mb-4 text-left px-4 ">
        <h1 className="text-xl font-sans font-medium pb-2"> {title} </h1>
        <h3> {subTitlte} </h3>
        <Link
          href={buttonLink}
          className=" text-white hover:bg-gray-200 font-medium hover:text-[#1B8733] bg-[#1B8733] py-2 px-3 mt-3 w-full rounded-md"
        >
          {buttonText}{" "}
        </Link>
      </div>
    </div>
  );
}
