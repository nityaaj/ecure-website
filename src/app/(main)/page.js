// import bgVector from '../assets/images/desktopbg.png'
// import heroImg from '../assets/images/heroimg.png'

const Hero = () => {
  return (
    <div className={` h-full`}
      style={{
        background: `url('/desktopbg.png') no-repeat center center`,
        // backgroundImage: `url('/desktopbg.png')`,
        backgroundSize: "100% 98%"
      }}
    >
      <div className='max-w-[1920px] mx-auto flex items-center px-5 '>
        <div className='basis-[50%]'>
          <div className='mx-auto mb-4'>
            <h1 className='bg-[#B0FFD3] w-fit rounded-xl px-5 pb-1 text-slate-900 font-medium'> E- cure Enviornment</h1>
            <h1 className='text-3xl font-medium'> A Commitment to </h1>
            <h1 className='text-3xl text-[#1B8733] font-medium'> Environmentally Responsible </h1>
            <h1 className='text-3xl font-medium '> Operations</h1>
          </div>
          <div className=''>
            <h1> E-Cure Environment is a privately held company that offers high-quality technical services in environmental consulting, water and wastewater treatment, field sampling, environmental testing, and ETP chemical.</h1>
          </div>
          <div className='mx-auto my-3'>
            <button className='text-white bg-[#1B8733] rounded-md px-3 py-1'> Contact Us</button>
          </div>
        </div>
        <div className='basis-[50%]'>
          <img src="heroimg.png" className='mx-auto rounded-[20%] h-96 my-20  ' />
        </div>

      </div>
    </div>
  )
}

export default Hero

