const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');


router.get('/view/:user_id',(req,res)=>{
  let user_id = req.params.user_id;
  let sql=`select vaccination_card from user where User_id='${user_id}' `;
database.query(sql,(err,result)=>{
  if(err) {console.log(err)}
  //console.log(result[0].profile_pic);
  
 


  if(result.length>0)
  {

    res.download('./public/vc/'+result[0].vaccination_card);
   
   
  }
  
})

 
})
