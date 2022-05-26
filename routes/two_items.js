const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

router.get('/record/:User_id',(req,res)=>{
    let gID = req.params.User_id;
    
    let qr = `select from record where  Form_check='Yes' and Date='${date.toDateString()}' `;
    
    database.query(qr,(err,result)=>{
    
    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.send({
            message:'Successful',
            data:result
            
        });
       }
       else 
       {
            res.send({
             message:'Unsuccessful'
        })
      }
    
    });
       
})