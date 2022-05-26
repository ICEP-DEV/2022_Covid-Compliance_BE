const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');
const router = express.Router();
const app=express();
module.exports = router;

app.use(cors());
app.use(bodyparser.json());

const database=require('./database');
var nodemailer = require('nodemailer');

router.put('/reset_password/:email',(req,res)=>{

let email=req.params.email;
let Password=req.body.Password;

let sql=`update user set Password='${Password}' where Email='${email}'`;
database.query(sql,(err,result)=>{

if(err){console.log(err)};
res.send({
message:'Successful'
});

});

});
