import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { createPayroll } from '../../../redux/action/payloadAction';

const PayloadCreate = ({ closeModal, user }) => {
    const dispatch = useDispatch();
    const [payrollData, setPayrollData] = useState({
        employeeId: user._id,
        salary: '',
        bonuses: '',
        deductions: '',
        finalSalary: '',
        month: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayrollData({ ...payrollData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPayroll(payrollData))
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
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Create Payroll</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Salary</label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={payrollData.salary}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Bonuses</label>
                                <input
                                    type="number"
                                    name="bonuses"
                                    value={payrollData.bonuses}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Deductions</label>
                                <input
                                    type="number"
                                    name="deductions"
                                    value={payrollData.deductions}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Final Salary</label>
                                <input
                                    type="number"
                                    name="finalSalary"
                                    value={payrollData.finalSalary}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Month</label>
                                <input
                                    type="text"
                                    name="month"
                                    value={payrollData.month}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Create Payroll
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

PayloadCreate.propTypes = {
    closeModal: PropTypes.func.isRequired,
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default PayloadCreate;
