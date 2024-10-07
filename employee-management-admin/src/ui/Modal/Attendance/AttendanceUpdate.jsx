import { motion } from "framer-motion";
import { X } from 'lucide-react';
import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { fetchAttendance, updateAttendance } from "../../../redux/action/attendanceAction";

const AttendanceUpdate = ({ closeModal, user }) => {
    const [updatedStatus, setUpdatedStatus] = useState(user.status || "");
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setUpdatedStatus(e.target.value);
    };

    const handleUpdate = () => {
        setUpdatedStatus(updatedStatus);

        dispatch(updateAttendance(user._id, { status: updatedStatus }))
            .then(() => {
                dispatch(fetchAttendance());
                closeModal();
            })
            .catch((error) => {
                console.error('Error updating attendance:', error);
            });
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
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Update Attendance Status</h2>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Attendance Status</label>
                                <select
                                    name="attendanceStatus"
                                    value={updatedStatus}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="" disabled>Select status</option>
                                    <option value="present">Present</option>
                                    <option value="absent">Absent</option>
                                    <option value="leave">On Leave</option>
                                </select>
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


AttendanceUpdate.propTypes = {
    closeModal: PropTypes.func.isRequired,
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};
export default AttendanceUpdate;
