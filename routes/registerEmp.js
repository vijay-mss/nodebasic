const express = require('express');

const router = express.Router();
const controller = require('../controller/registerController')

router.get('/sayHello', controller.sayHello);
router.get('/getEmpData', controller.getEmpData);
router.post('/getProduct', controller.getProduct);
router.post('/createEmployee', controller.createEmployee);
router.post('/updateEmp', controller.updateEmp);
router.post('/deleteRecord', controller.deleteRecord);

module.exports = router;