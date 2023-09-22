import { useForm } from 'react-hook-form';
import signImage from '../../assets/singup.jpg'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {createUser} = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    return (
        <>
            <Helmet>
             <title>KNOT | SIGN</title>
            </Helmet>

            <div className="flex max-w-7xl mx-auto h-screen items-center">
                <div className="w-1/2">
                    <img src={signImage} className="h-full w-full" alt="" />
                </div>
                <div className="w-1/2  grid place-items-center">
                    <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
                        <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
                            <div className="flex flex-col items-start">
                                <label htmlFor="email">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                    className="w-full rounded-md"
                                />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                    className="w-full rounded-md"
                                />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-md"
                                    {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                />
                                {errors.password && <span className='text-red-600'>Password is required</span>}
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password" f
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
                                    <Link to="/login"
                                        className="text-primary hover:underline cursor-pointer"
                                    >
                                       Login Now
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;