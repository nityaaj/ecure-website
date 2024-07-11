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
import Card from "../../../components/Card"

const Services = async () => {
  const featuredServices = await getFeaturedServicesList();
  return (
    <div className="mx-auto rounded-md mb-20 px-4 ">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredServices.map((service, index) => {
          return (
            <div className="w-full h-full">
              <ServiceCardComponent
                key={index}
                image={service.imageUrl}
                title={service.title}
                subTitlte={service.description}
                buttonText="Read More"
                buttonLink={`/services/${service.slug}`}
              />
            </div>
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
    // <div className="shadow-md rounded-md overflow-hidden relative z-0">
    //   <img src={image} className="rounded-md aspect-square" />
    //   <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0" style={{
    //     background: "linear-gradient(180deg, #D9D9D900 0%, #000 100%);",
    //     backgroundColor:"transparent",
    //   }} />
    //   <p
    //     className="absolute text-white bottom-[5%] left-[5%]"
    //   >
    //     {title}
    //   </p>
    //   {/* </div> */}
    // </div>

    <Card 
       cardImage={image}
       cardTitle={title}
       cardLink={buttonLink}

    />
  );
}
