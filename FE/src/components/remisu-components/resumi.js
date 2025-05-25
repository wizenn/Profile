import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft } from 'react-icons/fa';

const Remisu = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="relative w-full p-4 md:p-6">
                {/* Back Button */}
                <div className="fixed top-4 right-4 z-50 rounded-full p-2 hover:bg-gray-800 transition">
                    <a href="/" className="flex items-center space-x-2">
                        <FaArrowLeft className="w-5 h-5 text-white" />
                        <span className="hidden md:inline text-sm font-medium text-slate-900 dark:text-white">Back</span>
                    </a>
                </div>

                <div className="text-center mb-8 md:mb-10">
                    <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base">Check out my Resume</p>
                    <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white font-bold mt-2 md:mt-4">Resume</h1>
                </div>
            </div>

            <div className="flex container mx-auto px-4 pb-12" data-aos="fade-up">
                <ol className="flex flex-1 relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className='mb-5'>Education</h2>
                    <li className="mt-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Nguyen Tat Thanh University</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Sofware Engineering: Fullstack Developer
                        </p>
                    </li>
                    {/* <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                        </p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                        </p>
                    </li> */}
                </ol>
                <ol className="flex flex-1 relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className='mb-20'>Education</h2>
                    <li className="mt-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Nguyen Tat Thanh University</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Sofware Engineering: Fullstack Developer
                        </p>
                    </li>
                    {/* <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                        </p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                        </p>
                    </li> */}
                </ol>
            </div>
        </div>
    );
};

export default Remisu;

