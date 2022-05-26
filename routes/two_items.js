const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

router.get('/record/:User_id',(req,res)=>{
    let gID = req.params.User_id;
    
    let qr = `select Form_check, Tempareture, Date from record where User_id = '${gID}'`;
    
    database.query(qr,(err,result)=>{
    
      if(err){console.log(err);
        console.log(result,'result')
        res.send({message:'Unsuccessful'});
        } 
        else{
            res.send({
                message:'Successful',
                data:result
            });
    
        }
            
    }); 
       
      
    

  });
