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


router.post('/officer',(req,res)=>{

    console.log(req.body,'createdata');

    let Officer_id =req.body.Officer_id;
    let Campus_id=req.body.Campus_id;
    let First_name=req.body.First_name;
    let Last_name=req.body.Last_name;
    let Gender=req.body.Gender;
    let Cellphone_number=req.body.Cellphone_number;
    let Email=req.body.Email;
    let Password=req.body.Password;





let qr=`insert into officer(Officer_id,Campus_id,First_name,Last_name,Gender,Cellphone_number,Email,Password) values('${Officer_id}','${Campus_id}','${First_name}','${ Last_name}','${Gender}','${Cellphone_number}','${ Email}','${Password}')`;

database.query(qr,(err,result)=>{

 if(err){console.log(err);}
    console.log(result,'result')

        res.send({
            message:'data inserted'
        });

        res.send({message:'data not inserted'});
    
    });
   
    const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);

    };

    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };

});



