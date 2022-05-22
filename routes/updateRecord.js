const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

router.put('/record/:User_id',(req,res)=>{ 
    console.log(req.body,'updatedata');

    let User_id=req.params.User_id;
    let Officer_id=req.body.Officer_id;
    let date=new Date();
    let Tempareture=req.body.Tempareture;
    let Health_status_reason=req.body.Health_status_reason;
    let isAllowedEntrence=req.body.isAllowedEntrence;

    let qr = `update record set isAllowedEntrence='${isAllowedEntrence}',Tempareture='${Tempareture}',Officer_id='${Officer_id}' WHERE User_id='${User_id}'`;

    database.query(qr,(err,result)=>{
        if(err){console.log(err,'error');}

        res.send({
            message:'data updated'
        });
    });
})