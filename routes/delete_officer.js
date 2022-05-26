const database = require('./database');


const express =require('express');
const router = express.Router();

const app=express();
module.exports = router;


router.delete('/officer/:officer_id',(req,res)=>{
    let qID =req.params.officer_id;
     
    let qr = `delete from officer where officer_id = '${qID}'`;
    database.query(qr,(err,result)=>{

       if(err) {console.log(err);}
   
          res.send(
              {
                  message:'data deleted '
              }
          )

    });



});