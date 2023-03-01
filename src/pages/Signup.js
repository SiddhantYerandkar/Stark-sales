import React, { useState } from 'react'

export const SignUp = () => {

    const [credentials, setCredentials] = useState({ email: "", username: "", phone: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, phone: credentials.phone, password: credentials.password })
        })
        const json = await response.json()
        console.log(json);

        if (!json.status) {
            alert("Enter valid credentials")
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type={'email'} name='email' value={credentials.email} onChange={onChange} />
                    </div>
                    <div>
                        <label>User Name</label>
                        <input type={'text'} name='username' value={credentials.username} onChange={onChange}  />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type={'text'} name='phone' value={credentials.phone} onChange={onChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type={'password'} name='password' value={credentials.password} onChange={onChange}  />
                    </div>
                    <input type={'button'} value="submit" onClick={handleSubmit} />
                </form>
            </div>
        </>
    )
}
