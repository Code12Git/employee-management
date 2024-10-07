const { payrollModel } = require("../models");
const { NOT_FOUND, BAD_REQUEST } = require('../utils/errors');
const { AppError } = require('../utils');
const _ = require('lodash');

const create = async (body) => {
    const { employeeId, bonuses, salary, deductions, finalSalary, month } = body;

    try {
        if (_.isEmpty(employeeId) || salary == null || finalSalary == null || deductions == null || _.isEmpty(month) || bonuses == null) {
            const error = { ...BAD_REQUEST, message: 'All fields are required' };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const salaryRecord = await payrollModel.create({ employeeId, salary, deductions, finalSalary, month, bonuses });

        return salaryRecord;
    } catch (err) {
        throw err;
    }
};

const update = async (params, body) => {
    const { payrollId } = params.id;
    const { salary, deductions, finalSalary, month, bonuses } = body;

    try {
        const salaryRecord = await payrollModel.findByIdAndUpdate(payrollId, { salary, deductions, finalSalary, month, bonuses },
            { new: true, runValidators: true }
        );

        if (!salaryRecord) {
            const error = { ...NOT_FOUND, message: "Payroll record not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return salaryRecord;
    } catch (err) {
        throw err;
    }
};


const deleteOne = async (params) => {
    const payrollId = params.id;

    try {
        const salaryRecord = await payrollModel.findByIdAndDelete(payrollId, { new: true, runValidators: true });

        if (!salaryRecord) {
            const error = { ...NOT_FOUND, message: "Payroll record not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return salaryRecord;
    } catch (err) {
        throw err;
    }
};

const get = async (params) => {
    const employeeId = params.id;

    try {
        const salaryRecords = await payrollModel.find({ employeeId }).populate('employeeId');

        if (!salaryRecords || salaryRecords.length === 0) {
            const error = { ...NOT_FOUND, message: "Salary records not found for this employee" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return salaryRecords;
    } catch (err) {
        throw err;
    }
};

const getAll = async () => {
    try {
        const salaryRecords = await payrollModel.find().populate('employeeId');

        if (_.isEmpty(salaryRecords)) {
            const error = { ...NOT_FOUND, message: "No salary records found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return salaryRecords;
    } catch (err) {
        throw err;
    }
};

module.exports = { create, update, deleteOne, get, getAll };
