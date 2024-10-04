const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
    },
    department: {
        type: String,
    },
    position: {
        type: String,
    },
    phone: {
        type: Number,
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
