const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

router.get('/notification/:notification_id',(req,res)=>{
    let gID = req.params.notification_id;
    
    let qr = `select message from notification where notification_id = '${gID}'`;
    
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
       
})