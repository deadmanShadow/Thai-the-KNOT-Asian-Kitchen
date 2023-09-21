import React from 'react';
import signImage from '../../assets/singup.jpg'
import { Navigate } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="flex max-w-7xl mx-auto h-screen items-center">
        <div className="w-1/2">
          <img src={signImage} className="h-full w-full" alt="" />
        </div>
        <div className="w-1/2  grid place-items-center">
          <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
            <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
            <form className="space-y-5 w-full">
              <div className="flex flex-col items-start">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md"
                />
              </div>
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
              <div className="flex flex-col items-start">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full rounded-md"
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="btn btn-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{' '}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Login Now
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default SignUp;