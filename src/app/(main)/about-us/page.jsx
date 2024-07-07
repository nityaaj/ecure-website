// import aboutImg from '../assets/images/aboutImg.png'

const About = () => {
    return (
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
            <div>
                <img src="aboutImg.png" />
            </div>
            <div >
                <h1 className=' text-[#1B8733] text-2xl font-bold my-3 ml-3'> About Us</h1>
                <h1 className='font-sans ml-3 text-sm'> E-Cure Environment is an independent company offering high quality technical services in environmental consulting, water and wastewater treatment, field sampling, environmental testing and High quality ETP chemical. The firm is a privately held and is not a subsidiary of another company. Its product is accurate and timely technical information provided confidentially at a reasonable cost.</h1>
                <h1 className='font-sans ml-3 text-sm mt-2'> E-Cure Environment was organized in 2014 in Chhatral, as a contracts operations company to provide water and wastewater operations and maintenance services. Subsequently, an in-house laboratory was established to support the operating functions. The majority of our clients are in the Chhatral, Vithlapur, Kadi, Ahmedabad</h1>
            </div>
            <div className=" my-4 bg-[#F4F4F6] py-2 px-2 rounded-md">
                <h1 className='text-[#1B8733] text-2xl font-medium ml-2'> Mission </h1>
                <h1 className='text-sm my-2 text-[#919191] ml-2'> Our mission is to provide accurate and timely technical information at a reasonable cost. We are committed to environmentally responsible operations, which include using natural resources wisely and considering the overall impact on the environment. Environmental sustainability practices are incorporated by identifying and implementing techniques and practices that emphasize the environmental management hierarchy of pollution prevention (source reduction), reuse, recycling, treatment, and environmentally safe disposal.</h1>
            </div>
            <div className=" bg-[#F4F4F6] my-4 py-2 px-2 rounded-md">
                <h1 className='text-[#1B8733] text-2xl font-medium ml-2'> Vision</h1>
                <h1 className='text-sm my-2 text-[#919191] font-normal ml-2'>E-Cure Environment is proud of its growth and the ongoing professional development of its staff. Recognizing the value of customer satisfaction, our goal is to provide exceptional service with quality results in a timely manner.</h1>
            </div>
        </div>
    )
}

export default About
