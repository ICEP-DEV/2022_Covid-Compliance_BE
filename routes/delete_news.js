const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');
const router = express.Router();
const app=express();
module.exports = router;

app.use(cors());
app.use(bodyparser.json());

const database=require('./database');


router.delete('/delete_news_feed/:news_id',(req,res)=>{

let news_id =req.params.news_id;
    
let sql=`delete  from newsfeed where News_id ='${news_id}'limit 1`;

database.query(sql,(err,result)=>{

    if(err) {console.log(err);}

       res.send(
           {
               message:'News feed data deleted '
           }
       )

 });
 
});