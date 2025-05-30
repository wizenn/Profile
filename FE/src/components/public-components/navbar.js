import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between bg-white dark:bg-black text-black dark:text-white text-slate-900 dark:text-white px-6 py-4 w-full fixed z-30">
            <h1 className="text-xl">Minh Qui</h1>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <ul
                className={`${isOpen ? 'block' : 'hidden'
                    } absolute top-full left-0 w-full bg-white dark:bg-black text-black dark:text-white text-slate-900 dark:text-white text-center py-4 md:static md:flex md:items-center md:gap-10 md:text-xl md:ml-auto md:w-auto md:bg-transparent md:block`}
            >

                <li className="py-2 md:py-0" ><a href="/about">About</a></li>
                <li className="py-2 md:py-0"><a href='/remisu'>Resume</a></li>
                <li className="py-2 md:py-0">Portfolio</li>
                <li className="py-2 md:py-0"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
