import React, { useEffect, useState } from 'react';
import walkingCat from '../../assets/cats/walking.png';

const CatLoading = ({ onComplete }) => {

    const [dotIndex, setDotIndex] = useState(0);
    const [catLeft, setCatLeft] = useState(0);

    useEffect(() => {
        const totalDots = 3;
        const interval = 200;
        let i = 0;

        const timer = setInterval(() => {
            if (i < totalDots) {
                setDotIndex(i + 1);
                setCatLeft((i + 1) * 80);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 300);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center z-[9999]">
            <div className="relative h-24 w-[240px] flex items-end justify-start">

                <div className="absolute bottom-0 left-0 w-full flex justify-between px-4">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className={`text-slate-900 dark:text-white text-5xl transition-opacity duration-500 ${i < dotIndex ? 'opacity-100' : 'opacity-20'}`}
                        >
                            .
                        </span>
                    ))}
                </div>

                <img
                    src={walkingCat}
                    alt="walking cat"
                    className="absolute bottom-5 w-16 h-16 object-contain transition-all duration-500 ease-in-out"
                    style={{ left: `${catLeft}px` }}
                />
            </div>

        </div>
    );
};

export default CatLoading;
