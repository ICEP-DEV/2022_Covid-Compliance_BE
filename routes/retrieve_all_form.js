const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');



//onst database=require('./database');
// retrieve entered student 

router.get('/record',(req,res)=>{

    let date=new Date();
   
    //console.log('todays date', date.toDateString());
    let qr = `select * from record where Form_check='Yes' and isAllowedEntrence= '0' and Date='${date.toDateString()}'  `;
    
    database.query(qr,(err,result)=>{
    
    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.send({
            message:'get records data',
            data:result
            
        });
       }
       else 
       {
            res.send({
             message:'data not found'
        })
      }
    


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
       
});