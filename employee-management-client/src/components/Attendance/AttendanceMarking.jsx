import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAttendance } from "../../redux/actions/attendanceAction";
import { fetchAttendance } from "../../redux/actions/attendanceAction";
const AttendanceMarking = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('');
    const { error, loading } = useSelector(state => state.attendanceData);
    const { user } = useSelector(state => state.userData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createAttendance(user._id, status));
        await dispatch(fetchAttendance(user._id));
    };


    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Mark Your Attendance</h2>
            <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Attendance Status
                    </label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Status</option>
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                        <option value="leave">Leave</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {loading ? 'Marking...' : 'Mark Attendance'}
                </button>
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </form>
        </div>
    );
};

export default AttendanceMarking;
