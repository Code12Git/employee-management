import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login } from '../providers/authProvider';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await login(credentials);
            const userData = user.data.data.user;
            const token = user.data.data.token;

            setCredentials({ username: '', password: '' });
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', JSON.stringify(token));

            toast.success('Login successful');
            navigate('/users');
        } catch (err) {
            setLoginError('An error occurred. Please try again later.');
            console.error(err);
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-red-600 opacity-20 filter blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl transform hover:shadow-2xl transition-all"
            >
                <h2 className="text-center text-4xl font-bold text-gray-900">Admin Panel</h2>
                <p className="text-center text-sm text-gray-500">Sign in to access your dashboard</p>

                {loginError && <p className="text-red-500 font-bold text-center">{loginError}</p>}

                <form className="space-y-6" onSubmit={submitHandler}>
                    <div className="relative">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            placeholder="Enter your username"
                            value={credentials.username}
                            onChange={inputChangeHandler}
                            required
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={inputChangeHandler}
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform"
                    >
                        Login
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
