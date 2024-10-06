const express = require('express')
const cors = require('cors')
const logger = require('./utils/logger')
const { fromEnv } = require('./utils')
const connection = require('./config/db')
const authRoute = require('./routes/authRoute')
const employeeRoute = require('./routes/employeeRoute')
const attendanceRoute = require('./routes/attendanceRoute')
const payrollRoute = require('./routes/payrollRoute')
const app = express()
const PORT = fromEnv('APP_PORT') || 3000;

connection()

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/employee', employeeRoute)
app.use('/api/v1/attendance', attendanceRoute)
app.use('/api/v1/payroll', payrollRoute)

app.use((req, res, next) => {
    logger.info({
        method: req.method,
        url: req.url,
        headers: req.headers,
    });
    next();
});


app.get("/ping", (req, res) => {
    res.status(200).json({ message: ' Working!' })
});


app.listen(PORT, () => {
    logger.info(`🚀 Server is running on port ${PORT}`);
});
