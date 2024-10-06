const mongoose = require('mongoose')
const { Schema } = mongoose;


const payrollSchema = new Schema({
    employeeId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    salary: {
        type: Number,
        required: true
    },
    bonuses: {
        type: Number,
        default: 0,
    },
    deductions: {
        type: Number,
        default: 0
    },
    finalSalary: {
        type: Number,
    },
    month: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Payroll', payrollSchema)