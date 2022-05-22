const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

/*router.get('/image/:image_id',(req,res)=>{
    let gID = req.params.image_id;
    
    let qr = `select pic_path from image where image_id = '${gID}'`;
    
    database.query(qr,(err,result)=>{
    
    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.json({
          success:1,
          pic_path:result

      })
       }
       else 
       {
            res.send({
             message:'data not found'
        })
      }
    
    });
       
})*/

router.get('/view/:pic_id',(req,res)=>{
  let gID = req.params.pic_id;
  res.download('./public/images/'+gID);
})

