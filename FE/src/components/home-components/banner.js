import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../public-components/themeprovider';
import { FaFacebookF, FaGithub, FaInstagram, FaTiktok, FaAdjust } from 'react-icons/fa';

const Banner = () => {
    const { toggleTheme } = useTheme();
    const roles = ['Lập trình viên.', 'Freelancer.'];
    return (
        <div className="relative h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-current text-base tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                <div className='flex ml-20 gap-5'>
                    <button >VI</button>
                    <button >EN</button>
                </div>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Minh Quis</h1>
                <p className="text-lg md:text-2xl mt-4">
                    {"I'm a"}{' '}
                    {roles.length > 0 && (
                        <Typewriter
                            words={roles}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    )}{' '}
                    What about you?
                </p>
            </div>

            <img src={require('../../assets/mquis.png')} alt="banner" className="absolute right-12 bottom-0 h-full object-cover object-right z-0 opacity-90" />

            <div className="absolute right-5 bottom-20 flex flex-col gap-6 text-xl z-50">
                <button onClick={toggleTheme} className="hover:text-pink-500"><FaAdjust /></button>
                <a href="https://www.facebook.com/mquis.03" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaFacebookF /></a>
                <a href="https://github.com/wizenn" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaGithub /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaTiktok /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            </div>
        </div>
    );
};

export default Banner;
