const { userModel } = require('../models')
const bcrypt = require('bcryptjs')
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../utils/errors')
const { AppError } = require('../utils')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const { fromEnv } = require('../utils')


const register = async (body) => {
    const { name, username, email, password } = body;
    try {
        if (_.isEmpty(name) || _.isEmpty(username) || _.isEmpty(email) || _.isEmpty(password)) {
            const error = { ...BAD_REQUEST, message: "All fields are required" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            const error = { ...CONFLICT, message: "User already exists" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new userModel({
            name,
            username,
            email,
            password: hashedPassword,
            role: 'employee'
        });

        await newUser.save();
        return newUser;
    } catch (err) {
        throw err;
    }
};

const login = async (body) => {
    const { username, password } = body;
    try {
        if (_.isEmpty(username) || _.isEmpty(password)) {
            const error = { ...BAD_REQUEST, message: "Please enter all required fields" };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const user = await userModel.findOne({ username });
        if (!user) {
            const error = { ...NOT_FOUND, message: "User does not exist" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const error = { ...UNAUTHORIZED, message: "Invalid credentials" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const token = jwt.sign({ username: user.username, role: user.role }, fromEnv('SECRET_KEY'), { expiresIn: '1d' });
        return { user, token };
    } catch (err) {
        throw err;
    }
};



module.exports = { register, login }