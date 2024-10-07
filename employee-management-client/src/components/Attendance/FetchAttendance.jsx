import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from '../../redux/actions/attendanceAction';

const FetchAttendance = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userData);
    const { attendance, loading, error } = useSelector(state => state.attendanceData);

    useEffect(() => {
        const fetchData = async () => {
            if (user?._id) {
                await dispatch(fetchAttendance(user._id));
            }
        };
        fetchData();
    }, [dispatch, user?._id]);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Attendance Records</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 text-left text-gray-700">Name</th>
                            <th className="py-3 px-4 text-left text-gray-700">Email</th>
                            <th className="py-3 px-4 text-left text-gray-700">Department</th>
                            <th className="py-3 px-4 text-left text-gray-700">Status</th>
                            <th className="py-3 px-4 text-left text-gray-700">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance && attendance.length > 0 ? (
                            attendance.map((att) => (
                                <tr key={att._id} className="hover:bg-gray-100 transition-colors duration-200">
                                    <td className="py-2 px-4 border-b border-gray-300">{att.employeeId?.name || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{att.employeeId?.email || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{att.employeeId?.department || 'N/A'}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{att.status}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{new Date(att.createdAt).toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-2 px-4 text-center text-gray-500">No attendance records found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FetchAttendance;
