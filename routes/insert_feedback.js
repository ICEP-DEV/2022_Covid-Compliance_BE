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


router.post('/feedback',(req,res)=>{

    
   
    console.log(req.body,'createdata');

    //instatiating user variables


    //let Feed_id =req.body.Feed_id;
    let username=req.body.username;
    //let Camp_id=req.body.Camp_id;
    let Comment=req.body.Comment;
    let date  =new Date();

//sending the variables to the database



let qr=`insert into feedback(username,Comment,Date) values('${username}','${Comment}','${date.toDateString()}')`;

database.query(qr,(err,result)=>{

    if(err){console.log(err);
      console.log(result,'result')
      res.send({message:'data not inserted'});
    }else{

        res.send({
            message:'data inserted',
            username:username
        });
    }
  

 
       /* res.send({
            message:'data inserted'
        });

        res.send({message:'data not inserted'});*/


});

const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);

    };

    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };
    next();

});

