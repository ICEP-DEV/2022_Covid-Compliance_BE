const database = require('./database');


const express =require('express');
const router = express.Router();

const app=express();
module.exports = router;


router.delete('/notification/:notification_id',(req,res)=>{
    let qID =req.params.notification_id;
     
    let qr = `delete from notification where notification_id = '${qID}'`;
    database.query(qr,(err,result)=>{

       if(err) {console.log(err);}
   
          res.send(
              {
                  message:'notification deleted '
              }
          )

    });



});