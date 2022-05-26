// delete
const database = require('./database');


const express =require('express');
const router = express.Router();

const app=express();
module.exports = router;


router.delete('/user/:User_id',(req,res)=>{
    let qID =req.params.User_id;
     
    let qr = `delete from user where User_id = '${qID}'`;
    database.query(qr,(err,result)=>{

       if(err) {console.log(err);}
   
          res.send(
              {
                  message:'data deleted '
              }
          )

    });



});