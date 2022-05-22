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


router.post('/newsfeed',(req,res)=>{

    console.log(req.body,'createdata');

    //instatiating user variables

    let Title=req.body.Title;
    let News=req.body.News;
    let date=new Date();

console.log('todays date',date);
  let qr=`insert into newsfeed(Title,News,Date) values('${Title}','${News}','${date.toDateString()}')`;

 database.query(qr,(err,result)=>{

    if(err){console.log(err);
    console.log(result,'result')
    res.send({message:'data not inserted'});
    }
    else{
        res.send({
            message:'data inserted'
        });

    }
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

});