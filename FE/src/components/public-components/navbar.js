import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex bg-black w-full fixed z-30 items-center px-6 py-4">
            <h1 className='text-white text-xl'>Minh Qui</h1>

            <ul className='flex text-xl gap-10 text-white ml-auto'>
                <li><a href="/">About</a></li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


export default Navbar
