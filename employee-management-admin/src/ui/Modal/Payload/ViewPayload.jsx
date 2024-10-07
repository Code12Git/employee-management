import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { deletePayroll, fetchPayroll } from '../../../redux/action/payloadAction';

const ViewPayload = ({ closeModal, user }) => {
    const dispatch = useDispatch();
    const { payroll, error, loading } = useSelector((state) => state.payrollData);

    useEffect(() => {
        if (user._id) {
            dispatch(fetchPayroll(user._id));
        }
    }, [dispatch, user._id]);

    const handleDelete = (id) => {
        dispatch(deletePayroll(id));
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="bg-white w-full max-w-lg mx-4 sm:mx-auto p-6 rounded-lg shadow-xl relative overflow-y-auto max-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Payroll Details for {user.name}</h2>
                </div>

                {loading ? (
                    <div className="text-center mt-4">
                        <p className="text-gray-600">Loading payroll data...</p>
                    </div>
                ) : error ? (
                    <div className="text-center mt-4">
                        <p className="text-red-600">Error: {error}</p>
                    </div>
                ) : payroll && payroll.length > 0 ? (
                    <div className="space-y-6 mt-4">
                        {payroll.map((pay, index) => (
                            <div key={index} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                                <h3 className="font-bold text-gray-700">Payroll Record {index + 1}</h3>
                                <div className="mt-2">
                                    <p className="font-semibold text-gray-800">Salary:
                                        <span className="font-normal text-gray-600"> {pay.salary}</span>
                                    </p>
                                    <p className="font-semibold text-gray-800">Bonuses:
                                        <span className="font-normal text-gray-600"> {pay.bonuses}</span>
                                    </p>
                                    <p className="font-semibold text-gray-800">Deductions:
                                        <span className="font-normal text-gray-600"> {pay.deductions}</span>
                                    </p>
                                    <p className="font-semibold text-gray-800">Final Salary:
                                        <span className="font-normal text-gray-600"> {pay.finalSalary}</span>
                                    </p>
                                    <p className="font-semibold text-gray-800">Month:
                                        <span className="font-normal text-gray-600"> {pay.month}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(pay._id)}
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <p className="text-gray-600">No payroll data available.</p>
                    </div>
                )}

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={closeModal}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                    >
                        Close
                    </button>
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
