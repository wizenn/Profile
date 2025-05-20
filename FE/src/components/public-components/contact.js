import React, { useState } from 'react'
import { FaArrowLeft, FaUser, FaRegMap } from 'react-icons/fa'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra điền đầy đủ
        const { name, email, title, message } = formData;
        if (!name || !email || !title || !message) {
            setStatus('Vui lòng điền đầy đủ thông tin ❗');
            return;
        }

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('Email không hợp lệ ❌');
            return;
        }

        setStatus('Đang gửi...');
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                setStatus('Gửi thành công! ✅');
                setFormData({ name: '', email: '', title: '', message: '' });
            },
            (error) => {
                console.error('FAILED...', error);
                setStatus('Gửi thất bại ❌');
            }
        );
    };

    return (
        <div className='bg-black min-h-screen'>
            <div className="relative w-full text-white p-4 md:p-6">
                {/* Back Button */}
                <div className="fixed top-4 right-4 z-50 rounded-full p-2 hover:bg-gray-800 transition">
                    <a href="/" className="flex items-center space-x-2">
                        <FaArrowLeft className="w-5 h-5 text-white" />
                        <span className="hidden md:inline text-sm font-medium">Back</span>
                    </a>
                </div>

                {/* Heading */}
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-gray-400 font-bold text-sm md:text-base">Feel free to contact me anytimes</p>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">Get in Touch</h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-10 max-w-6xl mx-auto">

                    {/* Form */}
                    <div className='flex-1 w-full px-2 md:px-4'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-4'>Message Me</h2>
                        <form className='flex flex-col gap-4 text-gray-300' onSubmit={handleSubmit}>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='flex-1 bg-stone-900 rounded p-3 text-sm'
                                    placeholder='Name'
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='flex-1 bg-stone-900 rounded p-3 text-sm'
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className='bg-stone-900 rounded p-3 text-sm w-full'
                                placeholder='Subject'
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className='bg-stone-900 rounded p-3 text-sm w-full h-40 resize-none'
                                placeholder='Message'
                                required
                            />
                            <button type="submit" className='bg-green-700 hover:bg-green-800 text-white rounded-3xl px-6 py-3 w-fit'>Send Message</button>
                            {status && (
                                <p className={`text-sm ${status.includes('thất bại') || status.includes('không hợp lệ') || status.includes('Vui lòng') ? 'text-red-400' : 'text-green-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className='flex-1 w-full px-2 md:px-4'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-4'>Contact Info</h2>
                        <p className='text-gray-300 mb-6 text-sm md:text-base'>
                            Always available for freelance work if the right project comes along. Feel free to contact me!
                        </p>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-10 mt-3 text-green-500">
                                <FaUser size={18} />
                                <FaRegMap size={18} />
                                <IoCallOutline size={18} />
                                <MdOutlineMail size={18} />
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

    )
}

export default Contact
