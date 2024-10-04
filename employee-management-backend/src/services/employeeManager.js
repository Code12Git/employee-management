const { employeeModel } = require('../models');
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../utils/errors');
const { AppError } = require('../utils');
const _ = require('lodash');

const create = async (body) => {
    const { name, email, avatar, department, position, phone } = body;

    try {
        if (_.isEmpty(name) || _.isEmpty(email)) {
            const error = { ...BAD_REQUEST, message: "Name and email are required" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const existingEmployee = await employeeModel.findOne({ email });
        if (existingEmployee) {
            const error = { ...CONFLICT, message: "Employee with this email already exists" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const newEmployee = new employeeModel({
            name,
            email,
            avatar,
            department,
            position,
            phone
        });

        await newEmployee.save();
        return newEmployee;
    } catch (err) {
        throw err;
    }
};

const getAll = async () => {
    try {
        const employees = await employeeModel.find();
        if (_.isEmpty(employees)) {
            const error = { ...NOT_FOUND, message: "No employees found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return employees;
    } catch (err) {
        throw err;
    }
};

const get = async (id) => {
    try {
        const employee = await employeeModel.findById(id);
        if (!employee) {
            const error = { ...NOT_FOUND, message: "Employee not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        return employee;
    } catch (err) {
        throw err;
    }
};

const update = async (id, body) => {
    try {
        const { name, email, avatar, department, position, phone } = body;

        const updatedEmployee = await employeeModel.findByIdAndUpdate(
            id,
            { name, email, avatar, department, position, phone },
            { new: true, runValidators: true }
        );

        if (!updatedEmployee) {
            const error = { ...NOT_FOUND, message: "Employee not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return updatedEmployee;
    } catch (err) {
        throw err;
    }
};

const deleteOne = async (id) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(id);

        if (!employee) {
            const error = { ...NOT_FOUND, message: "Employee not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return employee;
    } catch (err) {
        throw err;
    }
};

const filter = async (filters) => {
    try {
        const { title, department, position } = filters;

        let filterCriteria = {};
        if (title) filterCriteria.title = title;
        if (department) filterCriteria.department = department;
        if (position) filterCriteria.position = position;

        const employees = await employeeModel.find(filterCriteria);

        if (_.isEmpty(employees)) {
            const error = { ...NOT_FOUND, message: "No employees match the given criteria" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return employees;
    } catch (err) {
        throw err;
    }
};

module.exports = { create, getAll, get, update, deleteOne, filter };
