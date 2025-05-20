import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingEnvelope = ({ children, duration = 5000 }) => {
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const openTimer = setTimeout(() => {
            setOpen(true);
        }, 1000);

        const finishTimer = setTimeout(() => {
            setLoading(false);
        }, duration);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(finishTimer);
        };
    }, [duration]);

    if (!loading) return children;

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative w-[500px] h-[300px]">
                {/* Phong thư */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[150px] bg-yellow-300 border border-yellow-500 z-10"
                    style={{ clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)", transformOrigin: "top center", zIndex: 20 }}
                    animate={open ? { rotateX: 180 } : { rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />

                {/* Tờ giấy bên trong */}
                <motion.div
                    className="absolute bottom-0 left-[30px] w-[440px] h-[200px] bg-white border border-gray-400 rounded shadow-md flex items-center justify-center text-4xl font-bold text-black"
                    initial={{ y: 150, opacity: 0 }}
                    animate={open ? { y: -100, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ zIndex: 5 }}
                >
                    HI
                </motion.div>

                {/* Đế phong thư */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-yellow-300 border border-yellow-500" />
            </div>
        </div>
    );
};

export default LoadingEnvelope;
