// const EmployeeModel = require('../models/emp');

// const mongoose = require('mongoose');

exports.getProduct = (req, res) => {
    res.status(200).json({ name: 'trimmer', price: '1989', feedBack: req.body.feedBack });
};
exports.sayHello = () => {
  console.log('Hello');
};
exports.createEmployee = (req, res) => {
    const emp = EmployeeModel(req.body);
    emp.save().then(() => {
        res.status(200).json({ message: ' Status okay' });
        console.log('Employee Created');
    }).catch((err) => {
        res.status(500).json({ message: ' Expection' });
        console.log(err, ' --> Error Creation');

    })
};
exports.getEmpData = (req, res) => {
   EmployeeModel.find().then((data) => {
        console.log(JSON.stringify(data), ' Response Data');
        res.status(200).json(data);
    }).catch((err) => {
        res.status(500).json({ message: ' Expection' });
        console.log(err, ' --> Error Creation');
    })

};

exports.updateEmp = (req, res) => {
   EmployeeModel.replaceOne({_id: req.body._id}, req.body).then(()=>{
       res.status(200).json('Record updated successfully');
   }).catch((err) => {
    res.status(500).json({ message: ' Expection' });
    console.log(err, ' --> Error Creation');
});
};

exports.deleteRecord = (req, res) =>{ 
    EmployeeModel.findByIdAndRemove(req.body._id).then(()=>{
        res.status(200).json('Record Deleted successfully');
    }).catch((err) => {
     res.status(500).json({ message: ' Expection' });
     console.log(err, ' --> Error Creation');
 });
};