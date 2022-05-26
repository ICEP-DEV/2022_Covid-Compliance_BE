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

    //instatiating user variables

    let User_id=req.body.User_id;
    let Form_check=req.body.Form_check;
    let date=new Date();

console.log('todays date',date);
  let qr=`insert into record(User_id,Form_check,Date) values('${User_id}','${Form_check}','${date.toDateString()}')`;

 database.query(qr,(err,result)=>{

    if(err){console.log(err);}
    console.log(result,'result')
    
        res.send({
            message:'data inserted'
        });
   
        res.send({message:'data not inserted'});

    })
});