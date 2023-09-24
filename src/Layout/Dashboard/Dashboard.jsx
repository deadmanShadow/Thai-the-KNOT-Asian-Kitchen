import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    FaShoppingCart,
    FaWallet,
    FaCalendarAlt,
    FaHome,
    FaBox,
    FaBoxOpen,
} from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-sky-950 text-white">
                <div className="p-4">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                </div>
                <ul className="space-y-2 mt-6">
                    <li>
                        <NavLink
                            to="/dashboard/payment"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaWallet className="mr-2" />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/reservations"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaCalendarAlt className="mr-2" />
                            Reservations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/home"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaHome className="mr-2" />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/mycart"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaShoppingCart className="mr-2" />
                            My Cart
                            <span className="ms-4 badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <div className="divider my-4 border-t border-gray-800"></div>
                    <li>
                        <NavLink
                            to="/"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaHome className="mr-2" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/menu"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaBoxOpen className="mr-2" />
                            Our Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/order"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-blue-800"
                        >
                            <FaBox className="mr-2" />
                            Order Food
                        </NavLink>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4 bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
