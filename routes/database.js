const mysql=require('mysql2');
const express =require('express');
const router = express.Router();
const bodyparser=require('body-parser');
const cors = require('cors');
const app=express();


const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'covid_compliance',port:'3306'})

//check the database  connection

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');}
        else{
            console.log('database connected.....');
        }
    

});
module.exports=db;
