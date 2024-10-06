const user = require('./user')
const attendance = require('./attendance')
const payroll = require('./payroll')
module.exports = { userModel: user, attendanceModel: attendance, payrollModel: payroll }