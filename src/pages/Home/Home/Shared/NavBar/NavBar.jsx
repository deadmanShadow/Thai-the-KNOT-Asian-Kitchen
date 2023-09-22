import { Link } from "react-router-dom";
import logoImg from '../../../../../assets/logoImg.png'
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    return (
        <div className="fixed navbar max-w-screen-xl z-10 bg-black bg-opacity-70 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/order">Order Food</Link></li>
                        {user && (
                            <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
                        )}
                    </ul>
                </div>
                <Link to='/' className="logo-link">
                    <img src={logoImg} alt="Logo" className="logo-image" style={{ width: '150px', height: 'auto' }} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/menu">Our Menu</Link></li>
                    <li><Link to="/order">Order Food</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex">
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-neutral">Login</Link>
                        <Link to="/signup" className="btn btn-outline btn-accent ms-2">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
