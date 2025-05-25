import React from 'react'

const CatAnimation = () => {
    const poses = [
        'sitting', 'standing', 'lying', 'walking',
        'waving', 'sleeping', 'stretching'
    ];
    const [poseIndex, setPoseIndex] = useState(0);

    const handleNextPose = () => {
        setPoseIndex((poseIndex + 1) % poses.length);
    };

    const pose = poses[poseIndex];

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="relative w-64 h-64">
                <img
                    src={`/cats/${pose}.png`}
                    alt={pose}
                    className="absolute w-full h-full object-contain transition-all duration-500 ease-in-out animate-bounce"
                />
            </div>
            <button
                onClick={handleNextPose}
                className="mt-8 px-4 py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400"
            >
                Đổi kiểu: {pose}
            </button>
        </div>
    );
}


export default CatAnimation;
