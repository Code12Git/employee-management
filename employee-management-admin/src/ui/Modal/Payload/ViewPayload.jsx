import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchPayroll } from '../../../redux/action/payloadAction';

const ViewPayload = ({ closeModal, user }) => {
    const dispatch = useDispatch();
    const { payroll, error, loading } = useSelector((state) => state.payrollData);

    useEffect(() => {
        if (user._id) {
            dispatch(fetchPayroll(user._id));
        }
    }, [dispatch, user._id]);

    return (
        <motion.div
            className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-white w-full max-w-md sm:max-w-lg mx-4 sm:mx-auto p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-y-auto max-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="mt-4">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Payroll Details for {user.name}</h2>

                    {loading ? (
                        <p className="text-center text-gray-600 animate-pulse">Loading payroll data...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : payroll && payroll.length > 0 ? (
                        <div className="space-y-6">
                            {payroll.map((pay, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <p className="font-semibold text-gray-800">Salary:</p>
                                    <p className="text-gray-600">{pay.salary}</p>

                                    <p className="font-semibold text-gray-800 mt-2">Bonuses:</p>
                                    <p className="text-gray-600">{pay.bonuses}</p>

                                    <p className="font-semibold text-gray-800 mt-2">Deductions:</p>
                                    <p className="text-gray-600">{pay.deductions}</p>

                                    <p className="font-semibold text-gray-800 mt-2">Final Salary:</p>
                                    <p className="text-gray-600">{pay.finalSalary}</p>

                                    <p className="font-semibold text-gray-800 mt-2">Month:</p>
                                    <p className="text-gray-600">{pay.month}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">No payroll data available.</p>
                    )}

                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={closeModal}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

ViewPayload.propTypes = {
    closeModal: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default ViewPayload;
