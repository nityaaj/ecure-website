// import bgVector from '../assets/images/desktopbg.png'
// import heroImg from '../assets/images/heroimg.png'

import Clients from "../../components/Clients";
import About from "./about-us/page";
// import Gallery from "./gallery/page";
import Projects from "./projects/page";
import Services from "./services/page";
import FeaturedImages from "../../components/FeaturedImages";
import { getFeaturedImages } from "../../sanity/sanity.query";
import Image from "next/image";

const Hero = async () => {
  const featuredImages = await getFeaturedImages();

  return (
    <main className="">
      <div
        className={`h-[calc(100svh-100px)] flex `}
        style={{
          background: `url('/desktopbg.png') no-repeat center center`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex flex-col md:flex-row w-full justify-center items-center px-24">
          <div className="flex flex-col justify-center items-start gap-8">
            <span className="bg-[#B0FFD3] px-4 py-2 rounded-full leading-loose">
              E-Cure Environment:
            </span>
            <h1 className="text-5xl font-semibold">
              A Commitment to <br />
              <span className="text-[#007936]">Environemtally Responsible</span>
              <br />
              Operations
            </h1>
            <p className="overflow-ellipsis w-1/2">
              E-Cure Environment is a privately held company that offers
              high-quality technical services in environmental consulting, water
              and wastewater treatment, field sampling, environmental testing,
              and ETP chemical.
            </p>
            <button className="px-5 py-2 bg-[#1B8733] text-white rounded-lg">
              Contact Us
            </button>
          </div>
          <div className="basis-1/2">
            <div className="rounded-tl-[20%] rounded-br-[20%] overflow-hidden">
              <img src="heroimg.png" className=" h-full w-full" />
            </div>
          </div>
        </div>
        {/* <div className='max-w-[1920px]  flex items-center justify-center h-full px-24 gap-10'>
          <div className='basis-[50%] flex flex-col items-start justify-center'>
            <div className=' mb-4'>
              <h3 className='bg-[#B0FFD3] w-fit rounded-xl px-5 pb-1 text-slate-900 font-medium'> E- cure Enviornment</h3>
              <h1 className='text-3xl font-medium'> A Commitment to </h1>
              <h1 className='text-3xl text-[#1B8733] font-medium'> Environmentally Responsible </h1>
              <h1 className='text-3xl font-medium '> Operations</h1>
            </div>
            <div className='w-3/4'>
              <p> E-Cure Environment is a privately held company that offers high-quality technical services in environmental consulting, water and wastewater treatment, field sampling, environmental testing, and ETP chemical.</p>
            </div>
            <div className=' my-3'>
              <button className='text-white bg-[#1B8733] rounded-md px-3 py-1'> Contact Us</button>
            </div>
          </div>
          <div className='w-full basis-1/3  flex justify-end '>
            <img src="heroimg.png" className='rounded-[20%] h-full w-full' />
          </div>
        </div> */}
      </div>
      <section className="px-20" id="about">
        <About />
      </section>
      <section className="px-20" id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section className="px-24" id="projects">
        <Projects />
      </section>
      <section className="md:px-24 px-8 bg-[#f4f4f6] py-4" id="gallery">
        {/* <FeaturedImages /> */}
        <div className="my-10 flex max-h-fit flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-center">Gallery</h1>
          <FeaturedImages featuredImages={featuredImages} />
          <a href="/gallery?type=All" className="bg-[#1B8733] text-white font-semibold rounded-md px-4 py-2 text-lg">
            View More
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
