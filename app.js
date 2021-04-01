const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const registerEmpRoutes = require('./routes/registerEmp');


app.use(bodyParser.json()); // Boby parser
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
app.use('/mss', registerEmpRoutes);

mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-uhsj0.mongodb.net/employeeDatabase?retryWrites=true').then((res)=>{
    console.log(res, ' MongoDB connected.');  
    app.listen(3000);
}).catch((err)=> {
    console.log('DB connection Error ---: ', err);
});

