const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    empName: String,
    email: String,
    phone: String,
    skill: String,
    salary: String
});

module.exports = mongoose.model('employee', employeeSchema);