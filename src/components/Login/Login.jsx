import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../context/UserContext';


const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()
        console.log('clicked');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, errorMessage, errorCode);
            });

    }
    const handleGoogleLogin = (event) => {
        event.preventDefault()
        console.log('clicked google');
        googleLogin()
    }

    return (
        <div id='login-from'>
            <form onSubmit={handleLogin} className="form-body lg:w-2/5 md:w-1/2 sm:w-1/2 ">
                <h2>LOGIN/SIGNUP</h2>
                <div className="form-item">
                    <label className="label">
                        <span className="label-text">Email/Phone</span>
                    </label>
                    <input type="text" name='email' placeholder="email or phone" className="" />
                </div>
                <div className="form-item">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className=" mt-6">
                    <button className="btn btn-primary w-full" type="submit">Login</button>
                </div>
                <div onClick={handleGoogleLogin} className="sign-with-google mt-6">
                    <button className="btn w-full"><img src="images/google-logo.png" alt="" /><span>Sign in with google</span></button>
                </div>
                <div className='mt-8'>
                    <h3>Don't have an account?<Link to="/signup"><u className='ml-2'>Sign Up</u></Link></h3>
                </div>
            </form>
        </div>
    );
};

export default Login;