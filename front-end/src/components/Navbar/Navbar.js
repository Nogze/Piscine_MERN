import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='p-4 w-full'>
                <ul className='flex space-x-7 font-medium'>
                    <li>
                        <Link className='mr-2 p-3 rounded-lg hover:bg-gray-300 underline-offset-2' to="/">Home</Link>
                        <Link className='m-2 p-3 rounded-lg hover:bg-gray-300 underline-offset-2' to="/signup">Sign up</Link>
                        <Link className='m-2 p-3 rounded-lg hover:bg-gray-300 underline-offset-2' to="/signin">Sign in</Link>
                        <Link className='m-2 p-3 rounded-lg hover:bg-gray-300 underline-offset-2' to="/posts">Posts</Link>
                    </li>
                </ul>
        </nav>
    )
}
