const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');



router.get('/flue',(req,res)=>{
    
     let sql = 'select COUNT(Form_id)Total from healthForm where Recent_cough="yes"';

    database.query(sql,(err,result)=>{
         if (err){
            console.log(err,'oops no data retrived');

         }
         if(result.length>0){
             res.send({
             message: 'all user data',
             data:result
             })
            
             console.log(result);
             
         }
     });

});


