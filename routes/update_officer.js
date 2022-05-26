const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

router.put('/officer/:Officer_id',(req,res)=>{ 
    console.log(req.body,'updatedata');

    let Officer_id=req.body.Officer_id;
    let Cellphone_number=req.body.Cellphone_number;
    let Email=req.body.Email;
    let Password=req.body.Password;

    let qr = `update officer set Cellphone_number='${Cellphone_number}',Email='${Email}',Password='${Password}' WHERE Officer_id ='${Officer_id}'`;


    database.query(qr,(err,result)=>{
        if(err){console.log(err);  
            
            res.send({
            message:'Unsuccessful'
        });
    }
   else{

    res.send({
        message:'Successful'
    });


   }
   
    });
   })
 