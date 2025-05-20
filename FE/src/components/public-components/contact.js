import React from 'react'
import { FaArrowLeft, FaUser, FaRegMap } from 'react-icons/fa'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <div className="relative w-full min-h-screen bg-black text-white bg-cover bg-center p-6">

                {/* Back Button */}
                <div className="fixed top-4 right-4 z-50 text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition">
                    <a href="/" className="flex items-center space-x-2">
                        <FaArrowLeft className="w-5 h-5 text-white" />
                        <span className="hidden md:inline text-sm font-medium">Back</span>
                    </a>
                </div>
                <div className="text-center mb-10">
                    <p className="text-gray-400 font-bold">Feel free to contact me anytimes</p>
                    <h1 className="text-6xl font-bold mt-4">Get in Touch</h1>
                </div>

                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="flex justify-center items-start gap-6 w-full max-w-6xl">


                        <div className='flex-1 flex flex-col px-4'>
                            <h2 className='text-2xl text-white font-semibold mb-5'>Message Me</h2>
                            <form className='flex flex-col gap-6 text-gray-300 w-full'>
                                <div className='flex gap-4'>
                                    <input type="text" className='flex-1 bg-stone-900 rounded-sm p-3 text-sm' placeholder='Name' required />
                                    <input type="email" className='flex-1 bg-stone-900 rounded-sm p-3 text-sm' placeholder='Email' required />
                                </div>
                                <input type="text" className='bg-stone-900 rounded-sm p-3 text-sm w-full' placeholder='Subject' required />
                                <textarea className='bg-stone-900 rounded-sm p-3 text-sm w-full h-40 resize-none' placeholder='Message' required></textarea>
                                <button className='bg-green-700 hover:bg-green-800 text-white rounded-3xl px-6 py-3 w-fit'>Send Message</button>
                            </form>
                        </div>


                        <div className='flex-1 '>
                            <h2 className='text-2xl text-white font-semibold mb-5'>Contact Info</h2>
                            <p className='text-gray-300 mb-10'>Always available for freelance work if the right project comes along. Feel free to contact me!</p>
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center gap-10 text-green-500">
                                    <FaUser size={20} />
                                    <FaRegMap size={20} />
                                    <IoCallOutline size={20} />
                                    <MdOutlineMail size={20} />
                                </div>
                                <div className="w-[1px] bg-gray-500" />
                                <div className="flex flex-col gap-4 text-sm">
                                    <div>
                                        <h3 className="font-semibold">Name</h3>
                                        <p className='text-gray-300'>Le Minh Qui</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className='text-gray-300'>Phu Thanh, Tan Phuoc, Tien Giang, Viet Nam</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Call Me</h3>
                                        <p className='text-gray-300'>+84369919913</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p><a href="mailto:minhqui.socialmedia@gmail.com" className="text-gray-300">minhqui.socialmedia@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Contact
