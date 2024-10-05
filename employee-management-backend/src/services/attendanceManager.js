const { attendanceModel } = require('../models');
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../utils/errors');
const { AppError } = require('../utils');
const _ = require('lodash');


const create = async (body, user) => {
    const { status } = body;
    const employeeId = user._id;

    try {
        if (_.isEmpty(status)) {
            const error = { ...BAD_REQUEST, message: "Status is empty" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const attendance = await attendanceModel.findOne({ employeeId, date: startOfDay });

        if (attendance) {
            const error = { ...CONFLICT, message: 'Attendance already marked' };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const newAttendance = new attendanceModel({ employeeId, date: startOfDay, status });
        return await newAttendance.save();
    } catch (err) {
        throw err;
    }
};


const get = async (employeeId) => {
    console.log(employeeId);
    try {
        const attendance = await attendanceModel.find({ employeeId }).populate('employeeId');
        if (!attendance || attendance.length === 0) {
            const error = { ...NOT_FOUND, message: 'Attendance not found' };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        return attendance;
    } catch (err) {
        throw err;
    }
};


const getAll = async () => {
    try {
        const attendanceRecords = await attendanceModel.find().populate('employeeId');
        return attendanceRecords;
    } catch (err) {
        throw new Error(`Error fetching attendance records: ${err.message}`);
    }
};


const update = async (attendanceId, status) => {
    try {
        const attendance = await attendanceModel.findById(attendanceId);
        if (!attendance) {
            throw new Error('Attendance record not found.');
        }

        attendance.status = status;
        const updatedAttendance = await attendance.save();
        return updatedAttendance;
    } catch (err) {
        throw new Error(`Error updating attendance record: ${err.message}`);
    }
};


const deleteOne = async (attendanceId) => {
    try {
        const deletedAttendance = await attendanceModel.findByIdAndDelete(attendanceId);
        if (!deletedAttendance) {
            throw new Error('Attendance record not found.');
        }
        return deletedAttendance;
    } catch (err) {
        throw new Error(`Error deleting attendance record: ${err.message}`);
    }
};

module.exports = { create, get, getAll, update, deleteOne };
