import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='p-4 w-full h-16'>
            <div className='flex justify-between align-middle h-full w-full m-auto'>
                <ul className='flex space-x-7 font-medium'>
                    <li>
                        <Link className='px-5' to="/">Home</Link>
                        <Link className='px-5' to="/register">Register</Link>
                        <Link className='px-5' to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
