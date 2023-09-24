import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Home/Home/Shared/SocialLogin/SocialLogin";
import signUpImg from '../../assets/signUp.svg';

const SignUp = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {

        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => console.log(error))
      })
  };
  return (
    <>
      <Helmet>
        <title>KNOT | Sign Up</title>
      </Helmet>
      <div className="flex max-w-7xl h-screen items-center mx-auto">
        <div className="hidden md:block w-1/2 h-full">
          <img src={signUpImg} alt="Sign Up" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <div className="md:max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full mt-1"
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mt-1"
                />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full mt-1"
                />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <div className="mt-4">
              <p>Already have an account?   <Link to="/login" className="text-sm text-primary hover:underline">
                Login Now
              </Link></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
