import React, { useState } from 'react'
import axios from 'axios'

export default function SignUp() {

    const [formData, setFormData] = useState({
        login: "",
        email: "",
        password: "",
        passwordconfirm: ""
    })

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value }
        )
    }

    const handleSubmit = (submit) => {
        submit.preventDefault()
        if (formData.login
            && formData.email
            && formData.password
            && formData.passwordconfirm) {

            axios.post(process.env.REACT_APP_API_URL + `/signup`, formData, {
                mode: 'no-cors'
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <h1 className='text-center text-4xl'>Sign up</h1>
            <form className='text-center drop-shadow-md' method='POST' onSubmit={handleSubmit}>
                <div className='my-10'>
                    <label htmlFor="login" className='block'>Login</label>
                    <input id='login' className='rounded' type='text' name='login' value={formData.login} onChange={handleChange} />
                </div>
                <div className='my-10'>
                    <label htmlFor="email" className='block'>Email</label>
                    <input id='email' className='rounded' type='email' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className='my-10'>
                    <label htmlFor="password" className='block'>Password</label>
                    <input id='password' className='rounded' type='password' name='password' value={formData.password} onChange={handleChange} />
                </div>
                <div className='my-10'>
                    <label htmlFor='passwordconfirm' className='block'>Confirm password</label>
                    <input id='passwordconfirm' className='rounded' type='password' name='passwordconfirm' value={formData.passwordconfirm} onChange={handleChange} />
                </div>
                <button type='submit' className='text-white bg-blue-500 px-10 rounded'>Sign up</button>
            </form>
        </div>
    )
}
