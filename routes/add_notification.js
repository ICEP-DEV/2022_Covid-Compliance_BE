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


router.post('/notification',(req,res)=>{

    console.log(req.body,'createdata');

    //let notification_id =req.body.notification_id;
    let Admin_id=req.body.Admin_id;
    let message=req.body.message;



let qr=`insert into notification(admin_id,message) values('${Admin_id}','${message}')`;

database.query(qr,(err,result)=>{

    if(err){console.log(err);
    console.log(result,'result')
    res.send({message:'notification not inserted'});
    } 
    else{
        res.send({
            message:'notification inserted'
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

