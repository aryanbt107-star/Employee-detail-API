const express = require('express');

const attendanceRoutes = require('./routes/attendance');
const employeeRoutes = require('./routes/employee');

const app = express();

app.use('/attendance', attendanceRoutes);
app.use('/employee', employeeRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});