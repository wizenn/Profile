import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col bg-black text-white bg-cover bg-center p-6">
            <div className="fixed top-4 right-4 z-50 text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition">
                <a href="/" className="flex items-center space-x-2">
                    <img src={require('../../assets/back.png')} alt="back" className="w-6 h-6 text-white" />
                    <span className="hidden md:inline text-sm font-medium">Back</span>
                </a>
            </div>

            <div className="text-center mt-4">
                <p className="text-gray-400">Get to know me</p>
                <h1 className="text-4xl font-bold mt-2">About Me</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10 px-4">
                <img src={require('../../assets/about.jpg')} alt="about" className="w-full md:w-1/2 max-w-md rounded-xl shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold">Who am I?</h2>
                    <p className="text-gray-300">
                        I'm Minh Qui, a young and passionate Front-End Developer with a strong interest in modern web technologies.
                        After graduating with a degree in Information Technology, I decided to focus on front-end development, especially
                        building clean, responsive interfaces.
                    </p>
                    <p className="text-gray-300">
                        In addition to my academic background, I actively self-learned tools like ReactJS, TailwindCSS, and Figma to
                        support my development workflow. Currently, I also work as a freelancer, creating websites for individuals and
                        small businesses. I enjoy transforming designs into real, interactive web experiences that are accessible, fast,
                        and user-friendly across all devices.
                    </p>
                    <hr className="border-gray-600" />
                    <h3>Name: <span>Minh Qui</span></h3>
                    <h3>Email: <a href="mailto:minhqui.socialmedia@gmail.com" className="text-gray-300">minhqui.socialmedia@gmail.com</a></h3>
                    <h3>Dob: <span>2003</span></h3>
                    <h3>From: <span>Tien Giang, Viet Nam</span></h3>
                    <div className='flex items-center gap-4 mt-4'>
                        <a href="/minhqui_cv.pdf" download>
                            <button className='bg-orange-400 text-black font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-orange-500 transition'>Download CV</button>
                        </a>
                        <a href="https://www.facebook.com/mquis.03" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://github.com/wizenn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            <hr className='mt-20 border-gray-600'></hr>

            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 mt-1 px-4">
                <img src={require('../../assets/about.jpg')} alt="experience" className="w-full md:w-1/2 max-w-md rounded-xl shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold">What experience do I have?</h2>
                    <p className="text-gray-300">
                        I had the opportunity to intern at VNPower Technology Co., Ltd., where I worked on real production-level projects as a
                        Front-End Intern. My responsibilities included developing interfaces from Figma designs using ReactJS and TailwindCSS,
                        as well as integrating APIs to dynamically render backend data.
                    </p>
                    <p className="text-gray-300">
                        One of the key projects I contributed to was the development of a warehouse management web application. This system
                        allowed users to manage inventory, track incoming and outgoing goods, and view detailed reports. I built core UI components
                        such as the product list, category filters, and dashboard charts, and collaborated closely with back-end developers
                        to ensure smooth API integration and real-time updates.
                    </p>
                    <p className="text-gray-300">
                        Through this experience, I improved my technical skills and gained insights into how software products are built and delivered
                        in real-world team environments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
