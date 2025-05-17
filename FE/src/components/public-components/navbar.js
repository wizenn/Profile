import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex bg-black w-full fixed z-30 items-center px-6 py-4">
            <h1 className='text-white text-lg font-bold'>Minh Quí</h1>

            <ul className='flex gap-6 text-white ml-auto'>
                <li>About</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


export default Navbar
