import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateEmployee } from '../../../redux/action/employeeAction';

const EmployeeUpdate = ({ closeModal, user }) => {
    const dispatch = useDispatch();

    const [updatedUser, setUpdatedUser] = useState({
        username: user.username,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        position: user.position,
        phone: user.phone,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log(updatedUser)
    const handleUpdate = () => {
        dispatch(updateEmployee(user._id, updatedUser));
        closeModal();
    };


    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-white w-full max-w-md sm:max-w-lg mx-4 sm:mx-auto p-4 sm:p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Update Employee Details</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={updatedUser.username}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={updatedUser.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={updatedUser.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Role</label>
                                <select
                                    name="role"
                                    value={updatedUser.role}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="" disabled>Select role</option>
                                    <option value="admin">Admin</option>
                                    <option value="employee">Employee</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Department</label>
                                <select
                                    name="department"
                                    value={updatedUser.department}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="" disabled>Select department</option>
                                    <option value="hr">HR</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="sales">Sales</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="finance">Finance</option>
                                    <option value="hiring">Hiring</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Position</label>
                                <select
                                    name="position"
                                    value={updatedUser.position}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="">Select Position</option>
                                    <option value="manager">Manager</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="analyst">Analyst</option>
                                    <option value="intern">Intern</option>
                                    <option value="sales executive">Sales Executive</option>
                                    <option value="hr">HR</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={updatedUser.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                />

                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

EmployeeUpdate.propTypes = {
    closeModal: PropTypes.func.isRequired,
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default EmployeeUpdate;
