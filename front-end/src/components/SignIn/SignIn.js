import React, { useState } from 'react'
import axios from 'axios'

export default function SignIn() {

    const [formData, setFormData] = useState({
        login: "",
        password: "",
    })

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value }
        )
    }

    const handleSubmit = (submit) => {
        submit.preventDefault()
            axios.post(process.env.REACT_APP_API_URL + `/signin`, formData, {
                mode: 'no-cors'
            })
                .then(response => {
                    console.log(response)
                    localStorage.setItem('token', response.data.token)
                })
                .catch(error => console.log(error))
    }

    return (
        <div>
            <h1 className='text-center text-4xl'>Sign in</h1>
            <form className='text-center drop-shadow-md' method='POST' onSubmit={handleSubmit}>
                <div className='my-10'>
                    <label htmlFor="login" className='block'>Login</label>
                    <input id='login' className='rounded' type='text' name='login' value={formData.login} onChange={handleChange} />
                </div>
                <div className='my-10'>
                    <label htmlFor="password" className='block'>Password</label>
                    <input id='password' className='rounded' type='password' name='password' value={formData.password} onChange={handleChange} />
                </div>
                <button type='submit' className='text-white bg-blue-500 px-10 rounded'>Log in</button>
            </form>
        </div>
    )
}
