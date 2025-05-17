import React from "react";
// import ScrollToTopButton from "../scroll-to-top-button/ScrollToTopButton";

const Footer = () => {
    return (
        <footer className="  container  mx-auto  ">
            <div className="">
                <div className="">
                    <h2 className="text-xs  mb-4 text-gray-400">Liên hệ</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="text-white">Số điện thoại: <a href="#" className="text-white active:text-red-500 focus:text-red-500 hover:text-red-500">0369-919-913</a></li>
                        <li className="text-white">Email: <a href="#" className="text-white active:text-red-500 focus:text-red-500 hover:text-red-500">minhqui2003tg@gmail.com</a></li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        {/* Facebook Icon */}
                        <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.482v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
                            </svg>
                        </a>

                        {/* YouTube Icon */}
                        <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.615 3.184c-1.232-.491-5.84-.492-5.84-.492s-4.609.001-5.841.492c-1.232.491-2.155 2.025-2.155 2.025s-.49 3.767-.49 7.563v1.5c0 3.796.49 7.563.49 7.563s.923 1.534 2.155 2.025c1.232.491 5.841.492 5.841.492s4.608-.001 5.84-.492c1.233-.491 2.156-2.025 2.156-2.025s.491-3.767.491-7.563v-1.5c0-3.796-.491-7.563-.491-7.563s-.923-1.534-2.156-2.025zm-10.115 13.316v-8l6 4-6 4z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>


        </footer>

    );
};

export default Footer;
