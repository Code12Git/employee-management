import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from '../../redux/action/attendanceAction';

const FetchAttendance = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAttendance());
    }, [dispatch]);
    const attendanceData = useSelector(state => state.attendanceData.attendance);
    console.log(attendanceData)

    return (
        <div className="container mx-auto p-4">
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
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData?.map((attendance, index) => (
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{attendance.employeeId?.name || attendance.name}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.username}</td>
                                <td className="border px-4 py-2">{attendance.employeeId?.email || attendance.email}</td>
                                <td className="border px-4 py-2">{attendance.employeeId.department || 'N/A'}</td>
                                <td className="border px-4 py-2">{attendance.employeeId.position || 'N/A'}</td>
                                <td className="border px-4 py-2">{attendance.status || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FetchAttendance;
