const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    employeeId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['present', 'absent', 'leave'],
        required: true,
    }
}, { timestamps: true });



module.exports = mongoose.model('Attendance', attendanceSchema);
