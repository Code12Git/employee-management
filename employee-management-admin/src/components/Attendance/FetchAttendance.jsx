import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAttendance, fetchAttendance } from '../../redux/action/attendanceAction';
import CircularProgress from '@mui/material/CircularProgress';
import AttendanceUpdate from '../../ui/Modal/Attendance/AttendanceUpdate';

const FetchAttendance = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAttendance());
    }, [dispatch]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const { attendance, error, loading } = useSelector(state => state.attendanceData);
    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };
    const handleDelete = (id) => {
        dispatch(deleteAttendance(id));
    };

    return (
        <div className="container mx-auto p-4">
            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading && (
                <div className="flex justify-center items-center h-32">
                    <CircularProgress />
                </div>
            )}
            <h2 className="text-2xl font-bold mb-4">Employee Attendance</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Username</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Department</th>
                            <th className="border px-4 py-2">Position</th>
                            <th className="border px-4 py-2">Attendance Status</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance?.map((attendance, index) => (
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{attendance.employeeId?.name || attendance.name}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.username}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.email || attendance.email}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.department || 'N/A'}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.position || 'N/A'}</td>
                                <td className="border px-4 py-2">{attendance.status || 'N/A'}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 mr-2"
                                        onClick={() => handleDelete(attendance._id)}
                                    >
                                        Delete
                                    </button>
                                    <button onClick={() => handleEdit(attendance)} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && selectedUser && (
                <AttendanceUpdate user={selectedUser} closeModal={closeModal} />
            )}
        </div>
    );
};

export default FetchAttendance;
