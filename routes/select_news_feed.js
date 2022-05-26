const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

router.get('/newsfeed',(req,res)=>{
    //let gID = req.params.Feed_id;
    
    let qr = `select * from newsfeed `;
    
    database.query(qr,(err,result)=>{
    
    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.send({
            message:'data returned',
            data:result
            
        });
       }
       else 
       {
            res.send({
             message:'data not found'
        })
      }
    
    });
       
});