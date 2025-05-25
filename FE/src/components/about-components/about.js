import React from 'react';
import { FaArrowLeft, FaFacebookF, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    return (
        <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white bg-cover bg-center p-6 transition-colors duration-500">

            <div className="fixed top-4 right-4 z-50 text-white md:text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition">
                <a href="/" className="flex items-center space-x-2">
                    <FaArrowLeft className="w-5 h-5 text-white" />
                    <span className="hidden md:inline text-sm font-medium">Back</span>
                </a>
            </div>


            <div className="text-center mt-4">
                <p className="text-gray-400 font-bold">{t("intro_title")}</p>
                <h1 className="text-6xl font-bold mt-4">{t("title")}</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20 px-4">
                <img src={require('../../assets/about.jpg')} alt="about" className="w-full md:w-1/2 max-w-md rounded-xl shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold">{t("who_title")}</h2>
                    <p className="text-slate-900 dark:text-white">
                        {t("who_text_1")}
                    </p>
                    <p className="text-slate-900 dark:text-white">
                        {t("who_text_2")}
                    </p>
                    <hr className="border-gray-600" />
                    <h3>{t("name")}: <span>Minh Qui</span></h3>
                    <h3>{t("email")}: <a href="mailto:minhqui.socialmedia@gmail.com" className="text-gray-300">minhqui.socialmedia@gmail.com</a></h3>
                    <h3>{t("dob")}: <span>2003</span></h3>
                    <h3>{t("from")}: <span>Tien Giang, Viet Nam</span></h3>
                    <div className='flex items-center gap-4 mt-4'>
                        <a href="/minhqui_cv.pdf" download>
                            <button className='bg-orange-200 text-black font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-orange-500 transition'>Download CV</button>
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
                    <h2 className="text-2xl font-semibold">{t("experience_title")}</h2>
                    <p className="text-slate-900 dark:text-white">{t("experience_text_1")}</p>
                    <p className="text-slate-900 dark:text-white">{t("experience_text_2")}</p>
                    <p className="text-slate-900 dark:text-white">{t("experience_text_3")}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
