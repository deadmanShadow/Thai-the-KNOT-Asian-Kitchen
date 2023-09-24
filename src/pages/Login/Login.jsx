import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from './../../Providers/AuthProvider';
import SocialLogin from '../Home/Home/Shared/SocialLogin/SocialLogin';
import loginImg from '../../assets/login.svg';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>KNOT | Login</title>
      </Helmet>
      <div className="flex max-w-7xl h-screen items-center mx-auto">
        <div className="hidden md:block w-1/2 h-full">
          <img src={loginImg} alt="Login" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <div className="md:max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full mt-1"
                />
                <Link to="#" className="text-sm text-primary hover:underline mt-1 block">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Captcha
                </label>
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className={`btn btn-primary ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={disabled}
                >
                  Login
                </button>
                <p>New Here? <Link to="/signup" className="text-sm text-primary hover:underline">
                  Create an account
                </Link> </p>
              </div>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
