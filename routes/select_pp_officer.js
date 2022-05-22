const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');


router.get('/view/:officer_id',(req,res)=>{
  let officer_id = req.params.officer_id;
  let sql=`select profile_pic from officer where User_id='${officer_id}' `;
database.query(sql,(err,result)=>{
  if(err) {console.log(err)}
  //console.log(result[0].profile_pic);
  
 


  if(result.length>0)
  {

    res.download('./public/pp/'+result[0].profile_pic);
   
   
  }
  
})

 
})
