'use client'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const ContactUs = () => {
    const Map = useMemo(() => dynamic(
        () => import('../../../components/Location'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
 
    return (
        <div className="mx-auto flex flex-col items-center justify-center"  >

            <div className='flex flex-col items-center w-full  bg-[#bfd8bd] text-white py-9' >
                <span className='lg:text-4xl md:text-4xl sm:text-4xl text-center font-serif font-semibold text-[#245501]'> We Serve You Better When We Know You Better ! </span>

                <div className="w-1/2 max-w-4xl p-6 bg-rounded-lg shadow-md my-10 rounded-md sm:mx-10 bg-[#155d27]"
                    // style={{
                    //     background: "rgba(255, 255, 255, 0.11)",
                    //     borderRadius: "16px",
                    //     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    //     backdropFilter: "blur(14.1px)",
                    //     WebkitBackdropFilter: "blur(14.1px)",
                    //     border: "1px solid rgba(255, 255, 255, 0.19)"
                    // }}
                >
                    <div className=" w-full">
                        <h2 className="text-3xl text-center text-white font-bold font-serif"> Contact Us</h2> <br />
                        <form action="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 

                                <div>
                                    <label className="block  text-lg font-semibold mb-2" htmlFor=""> First Name</label>
                                    <input placeholder="Jone" className="w-full text-black px-3 py-2 border border-green-600 rounded-lg bg-white focus:outline-none  focus:border-slate-900" type="text" />
                                </div>

                                <div>
                                    <label className="block  text-lg font-semibold mb-2" htmlFor=""> Last Name</label>
                                    <input placeholder="Doe" className="text-black w-full px-3 py-2 border border-green-600 rounded-lg bg-white focus:outline-none  focus:border-sate-900" type="text" />
                                </div>

                                <div>
                                    <label className="block  text-lg font-semibold mb-2" htmlFor=""> Email address</label>
                                    <input placeholder="jone.doe@gmail.com" className="text-black w-full px-3 py-2 border border-green-600 rounded-lg bg-white focus:outline-none  focus:border-slate-900" type="email" />
                                </div>

                                <div>
                                    <label className="block  text-lg font-semibold mb-2" htmlFor=""> Phone </label>
                                    <input placeholder="+91 ***** *****" className="text-black w-full px-3 py-2 border border-green-600 rounded-lg bg-white focus:outline-none  focus:border-slate-900" type="tel" pattern="[0-9]{10}" required />
                                </div>
                            </div>


                            <div>
                                <label className="block  text-lg font-semibold mt-4 mb-2" htmlFor=""> Message</label>
                                <textarea rows='4' placeholder=" TYPE YOUR MESSAGE HERE" className="text-black w-full px-3 py-2 border border-green-600 focus:text-slate-950 rounded-lg bg-white focus:outline-none focus:border-gray-950" type="text" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-white border border-green-700 text-slate-900 font-semibold text-lg px-4 py-2 my-4 rounded-lg focus:outline-none focus:outline-white"> Submit  </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


            <div className="w-full flex flex-col md:flex-row text-center  " 
            // style={{
            //     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            //     backdropFilter: "blur(6.7px)",
            //     background: "rgba(255, 255, 255, 0.31)"
            // }}
            >
                <div className="basis-[50%] pt-8">
                    <div className=" py-24">
                        <h1 className="text-2xl md:text-3xl font-semibold font-serif "> Head Office & Lab</h1><br />
                        <h1 className="text-xl font-medium"> Head Office & Lab</h1>
                        <h1>FF-6-7, Vraj Arcade</h1>
                        <h1>Near Sundek laminates</h1>
                        <h1>Chhatral-Mehsana highway, </h1>
                        <h1>Rajpur (N.G.) - 382715</h1>
                        <h1>+91 98790 59339</h1>
                        <h1>ecure.erl@gmail.com, chirag.ecure@gmail.com</h1>
                    </div>
                </div>

                <div className='basis-[50%] mx-10 my-6'>
                    <Map
                        position={[23.281676, 72.347442]}
                        zoom={13}
                    />
                </div>
 
            </div>


        </div >
    )
}

export default ContactUs
