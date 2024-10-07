const { userModel } = require('../models');
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../utils/errors');
const { AppError } = require('../utils');
const _ = require('lodash');
const { uploadOnCloudinary } = require('./cloudinary');
const bcrypt = require('bcryptjs')

const create = async (body) => {
    const { name, email, avatar, password, role, username, department, position, phone } = body;

    try {
        if (_.isEmpty(name) || _.isEmpty(email) || _.isEmpty(password)) {
            const error = { ...BAD_REQUEST, message: "Name, email, and password are required" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const existingEmployee = await userModel.findOne({ username });
        if (existingEmployee) {
            const error = { ...CONFLICT, message: "Employee with this username already exists" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newEmployee = new userModel({
            name,
            email,
            role,
            username,
            password: hashedPassword,
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
}

const getAll = async () => {
    try {
        const employees = await userModel.find();
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
        const employee = await userModel.findById(id);
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
        const { name, email, username, avatar, role, department, position, phone } = body;

        const updatedEmployee = await userModel.findByIdAndUpdate(
            id,
            { name, email, avatar, username, role, department, position, phone },
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
        const employee = await userModel.findByIdAndDelete(id);

        if (!employee) {
            const error = { ...NOT_FOUND, message: "Employee not found" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return employee;
    } catch (err) {
        throw err;
    }
};

const filter = async (username, name, department, position) => {
    try {
        let query = {};

        if (username) query.username = { $regex: new RegExp(username, 'i') };
        if (name) query.name = { $regex: new RegExp(name, 'i') };
        if (department) query.department = { $regex: new RegExp(department, 'i') };  // Case-insensitive department filter
        if (position) query.position = { $regex: new RegExp(position, 'i') };  // Case-insensitive position filter


        // Find employees based on filters
        const employees = await userModel.find(query);

        // If no employees found, throw custom error
        if (_.isEmpty(employees)) {
            const error = { ...NOT_FOUND, message: "No employees match the given criteria" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return employees;
    } catch (err) {
        throw err;
    }
};

const upload = async (files, user) => {
    const { screenshot } = files;
    const { id } = user;
    console.log(id);

    try {
        if (!screenshot || screenshot.length === 0) {
            const error = { ...BAD_REQUEST, message: "No image was uploaded" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const screenshotLocalPath = screenshot[0].path;
        const uploadedScreenshot = await uploadOnCloudinary(screenshotLocalPath);

        if (!uploadedScreenshot) {
            const error = { ...BAD_REQUEST, message: "Error uploading image" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const screenshotDocument = await userModel.findOneAndUpdate({ _id: id }, { screenshot: uploadedScreenshot.url }, { new: true });

        if (!screenshotDocument) {
            const error = { ...BAD_REQUEST, message: "Error uploading image" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        return screenshotDocument;

    } catch (err) {
        throw err;
    }
};





module.exports = { create, getAll, get, update, deleteOne, filter, upload };
