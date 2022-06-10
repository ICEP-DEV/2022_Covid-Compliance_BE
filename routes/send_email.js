
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


// email



  var nodemailer = require('nodemailer');
//id,fullname,email,message

router.post('/send',(req,res)=>{
  let User_id=req.body.User_id;
  let fullname=req.body.fullname;
  let email=req.body.email;
  let message=req.body.message;

  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'banze.aj@outlook.com',
        pass: '13Moleya.r'
  }
  });

  var mailOptions = {
  from:'banze.aj@outlook.com',
  to:JSON.stringify(email),
  subject:'covid compliance  ' ,
  text:message+  ' from '+fullname+' with ID'+User_id+' '

  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


 
  });