import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json);

    if (!json.status) {
      alert("Enter valid credentials")
    }
    if (json.status) {
      localStorage.setItem("authToken", json.token)
      console.log(localStorage.getItem("authToken"));
      navigate("/")
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
            <label>Password</label>
            <input type={'password'} name='password' value={credentials.password} onChange={onChange} />
          </div>
          <input type={'button'} value="submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  )
}
