
const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');



router.get('/record',(req,res)=>{
     let sql = 'select * from record';

    database.query(sql,(err,result)=>{
         if (err){
            console.log(err,'oops no data retrived');

         }
         if(result.length>0){
             res.send({
             message: 'all user data',
             data:result
             })
             
         }

         else{

            res.send({
                message:'no data'
            })
         }
     });

  
    

    
});