import React from 'react';

const Attendance = ({ attendanceData }) => {
    const { employeeId, date, status } = attendanceData;

    return (
        <div className="attendance-card p-6 bg-white shadow-lg rounded-md max-w-md mx-auto my-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Attendance Record</h2>
            <div className="employee-info mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Employee Details</h3>
                <p><strong>Username:</strong> {employeeId.username}</p>
                <p><strong>Name:</strong> {employeeId.name}</p>
                <p><strong>Email:</strong> {employeeId.email}</p>
            </div>
            <div className="attendance-info">
                <h3 className="text-lg font-semibold text-gray-700">Attendance Info</h3>
                <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {status}</p>
            </div>
        </div>
    );
};

export default Attendance;
