import React from 'react';
import { motion } from 'framer-motion';
import PrivateRoute from '../hooks/PrivateRoute';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userAction';
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <PrivateRoute>
            <nav className="bg-gradient-to-r from-purple-500 via-red-400 to-indigo-600 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-extrabold tracking-widest">
                                Employee Portal
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <NavLink to='/attendance' className="hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out">
                                Attendance
                            </NavLink>
                            <NavLink to='/payroll' className="hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out">
                                Payroll
                            </NavLink>

                            <button
                                onClick={logoutHandler}
                                className="w-full text-left text-white hover:bg-red-500 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                            >
                                Logout
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-gray-300 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-indigo-600"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink to='/attendance' className="hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out">
                                Attendance
                            </NavLink>
                            <NavLink to='/payroll' className="hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out">
                                Payroll
                            </NavLink>

                            <button
                                onClick={logoutHandler}
                                className="w-full text-left text-white hover:bg-red-500 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                            >
                                Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>
        </PrivateRoute>
    );
};

export default Navbar;
