import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className="relative h-screen  bg-black text-white">
            {/* Góc trái: VIE/ENG dọc */}
            <div
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-base tracking-widest"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
                <span className="cursor-pointer block">VIE</span>
                <span className="cursor-pointer block">ENG</span>
            </div>

            {/* để chữ chạy npm install react-simple-typewriter */}

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl text-white font-bold">Minh Quis</h1>
                <p className="text-lg md:text-2xl mt-4">
                    I'm a
                    <Typewriter
                        words={[" Developer.", " Freelancer."]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                    What about you?
                </p>
            </div>

            {/* Ảnh nhân vật căn phải, cover toàn vùng */}
            <img
                src={require('../../assets/mquis.png')}
                alt="banner"
                className="absolute right-12 bottom-0 h-full object-cover object-right z-0 opacity-90"
            />

            {/* Góc phải: icon mạng xã hội */}
            <div className="absolute right-5 bottom-20 flex flex-col gap-6 text-white text-xl">
                <a href="https://www.facebook.com/mquis.03" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaFacebookF />
                </a>
                <a href="https://github.com/wizenn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaGithub />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <FaTiktok />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <FaInstagram />
                </a>

            </div>
        </div>
    );
};

export default Banner;
