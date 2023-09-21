import React, { useContext, useEffect, useState } from 'react';
import loginImage from '../../assets/login.svg';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha
} from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { signIn } = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6); // Initialize the reCAPTCHA engine with 6 characters
    }, []);

    const [captchaValid, setCaptchaValid] = useState(true);
    const [captchaSuccess, setCaptchaSuccess] = useState(false); // Added success state

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captchaValue = form.captcha.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

        // Validate the captcha
        if (!validateCaptcha(captchaValue)) {
            setCaptchaValid(false);
            setCaptchaSuccess(false); // Reset success state on validation failure
            return;
        }

        // Set success state on validation success
        setCaptchaValid(true);
        setCaptchaSuccess(true);

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
                        <div className={`flex flex-col items-start ${!captchaValid ? 'text-red-500' : ''}`}>
                            <label htmlFor="captcha">Captcha</label>
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                className={`w-full rounded-md ${!captchaValid ? 'border border-red-500' : ''}`}
                            />
                            {!captchaValid && <p className="text-sm">Captcha validation failed. Please try again.</p>}
                            {captchaSuccess && <p className="text-green-500 text-sm">Captcha validation successful!</p>} {/* Added success message */}
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
