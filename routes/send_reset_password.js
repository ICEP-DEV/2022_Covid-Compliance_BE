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
var nodemailer = require('nodemailer');

router.post('/reset_email',(req,res)=>{

let email=req.body.email;

let sql=`select email from user where Email='${email}' `

database.query(sql,(err,result)=>{

  if(err){console.log(err)};
  if(result.length>0){


    res.send({
     message:'Successful'
    });


    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'thatothato1818@gmail.com',
          pass: '13Moleya.r'
      }
      });
    
      var mailOptions = {
      from:'thatothato1818@gmail.com',
      to:JSON.stringify(email),
      subject:'covid compliance password reset  ' ,
      text:'click the following link to reset your password  '
      + 'http://localhost:4200/reset_password/reset_password/'+email
    
      };
    
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
  
  
  
   
      

  }else{

    res.send({
      message:'Unsuccessful'
    });
  }
});



});