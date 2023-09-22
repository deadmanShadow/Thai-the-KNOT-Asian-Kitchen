import React, { useContext, useEffect, useState } from 'react';
import loginImage from '../../assets/login.svg';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        // sweet alert
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged In Successfully',
            showConfirmButton: false,
            timer: 1500
        })
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Captcha:', captchaValue);
    };

    return (
        <>
            <Helmet>
                <title>KNOT | LOGIN</title>
            </Helmet>
            <div className="flex max-w-7xl h-screen items-center mx-auto">
                <div className="w-1/2">
                    <img src={loginImage} className="h-full w-full" alt="" />
                </div>
                <div className="w-1/2 grid place-items-center">
                    <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                        <h1 className="mb-10 md:w-1/2 font-medium text-2xl">
                            Please Login
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-3 w-full">
                            <div className="flex flex-col items-start">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-md"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-md"
                                />
                            </div>
                        
                            <div className="relative !mt-8">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    Login
                                </button>
                            </div>
                            <div>
                                <p>Don't have an account?
                                    <Link className='text-primary hover:underline cursor-pointer' to="/signup"> Create an account</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
