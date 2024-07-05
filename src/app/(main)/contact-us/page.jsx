
const ContactUs = () => {
    return (
        <div className="max-w-full p-6 bg-[#2d6a4f] rounded-lg shadow-md mb-10 ">
            <div className=" w-full">
                <h2 className="text-3xl text-center text-white font-bold mb-6"> Contact Us</h2>
                <form action="">
                    <div className="grid grid-cols-2 gap-6">
                     
                        <div>
                            <label className="block text-white text-md font-semibold mb-2" htmlFor=""> First Name</label>
                            <input placeholder="Jone" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:text-white focus:border-gray-500" type="text" />
                        </div>

                        <div>
                            <label className="block text-white text-md font-semibold mb-2" htmlFor=""> Last Name</label>
                            <input placeholder="Doe" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:text-white focus:border-gray-500" type="text" />
                        </div>

                        <div>
                            <label className="block text-white text-md font-semibold mb-2" htmlFor=""> Email address</label>
                            <input placeholder="jone.01@gmail.com" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:text-white focus:border-gray-500" type="text" />
                        </div>

                        <div>
                            <label className="block text-white text-md font-semibold mb-2" htmlFor=""> Phone </label>
                            <input placeholder="+91 ***** *****" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:text-white focus:border-gray-500" type="text" />
                        </div>
                    </div>


                    <div>
                        <label className="block text-white text-md font-semibold mt-4 mb-2" htmlFor=""> Message</label>
                        <textarea rows='4' placeholder=" TYPE YOUR MESSAGE HERE" className="w-full px-3 py-2 border focus:text-slate-950 rounded-lg bg-white focus:outline-none focus:border-gray-950" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-white text-slate-900 font-semibold px-4 py-2 my-4 rounded-lg hover:bg-[#d8f3dc] hover:text-[#2d6a4f] focus:outline-none focus:outline-white"> Submit  </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactUs
