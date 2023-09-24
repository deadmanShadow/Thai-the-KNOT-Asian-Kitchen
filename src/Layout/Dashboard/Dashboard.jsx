import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBox, FaBoxOpen } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link><FaWallet /> Payment History</Link></li>
                    <li><Link><FaCalendarAlt /> Reservations</Link></li>
                    <li><Link><FaHome /> User Home</Link></li>
                    <li><Link><FaShoppingCart /> My Cart</Link></li>
                    <div className='divider'></div>
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='/menu'><FaBoxOpen /> Our Menu</Link></li>
                    <li><Link to='/order'><FaBox /> Order Food</Link></li>
                    <li></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;