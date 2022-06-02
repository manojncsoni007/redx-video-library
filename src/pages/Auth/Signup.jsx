import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context'
import './Auth.css'

const Signup = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signupUser } = useAuth();

    const signupHandler = (e) => {
        e.preventDefault();
        if (firstName && lastName && email && password) {
            signupUser(firstName, lastName, email, password);
        } else {
            alert('enter valid info');
        }

    }

    return (
        <>
            <main className="auth-container">
                <form onSubmit={(e) => signupHandler(e)}>
                    <h4 className="text-center">Signup</h4>
                    <div className="input-container">
                        <label htmlFor="name" className="label">Name *</label>
                        <input type="text" id="firstName" className="input" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="name" className="label">Name *</label>
                        <input type="text" id="lastName" className="input" onChange={(e) => setLastName(e.target.value)} placeholder="Enter your name" required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="label">Email Address *</label>
                        <input type="text" id="email" className="input" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" required/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="label">Password *</label>
                        <input type="password" id="password" className="input" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required/>
                    </div>
                    <div className="user-auth flex-center">
                        <label htmlFor="remember-me">
                            <input type="checkbox" id="remember-me" />
                            I accept all Terms & Condition</label>
                    </div>
                    <button className="auth-btn">Signup</button>
                    <div className="flex-center">
                        <Link to="/login">Already User ? <b>Login</b></Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export { Signup }
