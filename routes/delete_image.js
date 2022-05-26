const database = require('./database');


const express =require('express');
const router = express.Router();

const app=express();
module.exports = router;



router.delete('/image/:image_id',(req,res)=>{
    let qID =req.params.image_id;
     
    let qr = `delete from image where image_id = '${qID}'`;
    database.query(qr,(err,result)=>{

       if(err) {console.log(err);}
   
          res.send(
              {
                  message:'image deleted '
              }
          )

    });



});