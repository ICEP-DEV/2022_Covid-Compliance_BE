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

    
    //console.log(req.body,'createdata');

    //instatiating user variables


    let news_id =req.params.news_id;
    
   

//sending the variables to the database



let sql=`delete  from newsfeed where News_id ='${news_id}'limit 1`;


database.query(sql,(err,result)=>{
    if (err){
       console.log(err,'sorry no data was deleted');

    }
    if(result.length>0){
        res.send({
        message: 'all news Feed Deleted..!!',
        data:result
        })
        
    }
    

});
});