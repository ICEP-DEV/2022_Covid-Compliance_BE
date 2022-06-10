
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


router.post('/user',(req,res)=>{

    
   
    console.log(req.body,'createdata');

    //instatiating user variables


    let userId =req.body.userId;
    let lastName=req.body.lastName;
    let campId=req.body.campId;
    let gender=req.body.gender;
    let type=req.body.type;
    let cellphone=req.body.cellphone;
    let email=req.body.email;
    let password=req.body.password;
    let firstNames=req.body.firstNames;

//check if email have registered before
let qr = `select Email from user where Email = '${email}'`;
database.query(qr,(err,result)=>{

    

    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.send({
            message:'Unsuccessful',
            data:result
           
            
        });
       }
       else 
       {
            res.send({
             message:'Successful'
        });


         //start registering

         let qr=`insert into user(User_id,Camp_id,First_name,Last_name,Gender,Type,Cellphone_number,Email,Password) values('${userId}','${campId}','${firstNames}','${lastName}','${gender}','${type}','${cellphone}','${ email}','${password}')`;

         database.query(qr,(err,result)=>{

  
            if(err){console.log(err);
                console.log(result,'result')
                res.send({message:'Unsuccessful'});


            

              }else{
          
                  res.send({
                      message:'Successful'
                    
                      

                  });

                
              }
            
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
              //next();


           
                 /* res.send({
                      message:'data inserted'
                  });
          
                  res.send({message:'data not inserted'});*/
          
          
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
   // next();
  // email

  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
      user: 'banze.aj@outlook.com',
      pass: '13Moleya.r'
  }
  });

  var mailOptions = {
  from: 'banze.aj@outlook.com',
  to:JSON.stringify(email),
  subject:'covid complaince  ' ,
  text:firstNames+' '+lastName+' WELCOME TO COVID COMPLAINCE '

  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
 

});
