import React from 'react';
import loginImage from '../../assets/login.svg'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="flex max-w-7xl h-screen items-center mx-auto">
            <div className="w-1/2">
                <img src={loginImage} className="h-full w-full" alt="" />
            </div>
            <div className="w-1/2 grid place-items-center">
                <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                    <h1 className="mb-10 md:w-1/2 font-medium text-2xl">Please Login</h1>
                    <form onSubmit={handleLogin} className="space-y-3 w-full">
                        <div className="flex flex-col items-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-md"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-md"/>
                        </div>
                        <div className="relative !mt-8">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                        </div>
                        <div>
                            <p>
                                Don't have an account?{' '}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;