const mongoose = require('mongoose')
const { Schema } = mongoose;

const userModel = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'employee'],
        default: 'employee'
    },
    department: {
        type: String,
        enum: ['hr', 'engineering', 'sales', 'marketing', 'finance', 'hiring']
    },
    position: {
        type: String,
        enum: ['manager', 'developer', 'designer', 'analyst', 'intern', 'sales executive', 'hr']
    },
    phone: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userModel)