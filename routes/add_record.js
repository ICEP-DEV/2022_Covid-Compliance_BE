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


router.post('/record',(req,res)=>{

    console.log(req.body,'createdata');

    let Officer_id =req.body.Officer_id;
    let Form_check=req.body.Form_check;
    let Date=req.body.Date;
    let Tempareture=req.body.Tempareture;
    let isAllowedEntrence=req.body.isAllowedEntrence;
    let Health_status_reason=req.body.Health_status_reason;
   





let qr=`insert into record(Office_id,Form_check,Date,Tempareture,isAllowedEntrence,Health_status_reason) values('${Officer_id}','${Form_check}','${Date}','${Tempareture}','${isAllowedEntrence}','${Health_status_reason}')`;

database.query(qr,(err,result)=>{

    if(err){console.log(err);}
    console.log(result,'result')

        res.send({
            message:'data inserted'
        });

        res.send({message:'data not inserted'});
    })



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



