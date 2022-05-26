const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// update   
router.put('/user/:User_id',(req,res)=>{ 
    console.log(req.body,'updatedata');

    let User_id=req.body.User_id;
    let Cellphone_number=req.body.Cellphone_number;
    let Email=req.body.Email;
    let Password=req.body.Password;

    let qr = `update user set Cellphone_number='${Cellphone_number}',Email='${Email}',Password='${Password}' WHERE User_id='${User_id}'`;

    database.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message:'data updated'
        });
    });
   })