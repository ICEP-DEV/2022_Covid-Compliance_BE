const database = require('./database');


const express =require('express');
const router = express.Router();

const app=express();
module.exports = router;


router.delete('/feedback/:Feed_id',(req,res)=>{
    let qID =req.params.Feed_id;
     
    let qr = `delete from feedback where Feed_id = '${qID}'`;
    database.query(qr,(err,result)=>{

       if(err) {console.log(err);}
   
          res.send(
              {
                  message:'data deleted '
              }
          )

    });



});