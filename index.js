
//declaring variables

const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const app=express();
const mysql=require('mysql2');






const router = express.Router();
const viewall = require('./routes/viewall');
const delete_user =  require('./routes/delete');
const add=require('./routes/add_user');
const view_user=require('./routes/view_user');
const update=require('./routes/update');
const login=require('./routes/login');
const update_officer=require('./routes/update_officer');
const login_officer=require('./routes/login_officer');
const records=require('./routes/get_all_records');
const officers=require('./routes/retrieve_all_officers');
const create_officer=require('./routes/create_officer');
const retrieve_entered_student=require('./routes/retrieve_entered_student');
const delete_officer=  require('./routes/delete_officer');
const login_admin=  require('./routes/login_admin');
const updateRecord=  require('./routes/updateRecord');
const insertRecord=  require('./routes/insertRecord');
const retrieve_officer=require('./routes/retrieve_officer');
const retrieve_all_form=require('./routes/retrieve_all_form');
const delete_feedback=require('./routes/delete_feedback');
const insert_feedback=require('./routes/insert_feedback');
const select_all_feedback=require('./routes/select_all_feedback');
const view_single_feedback=require('./routes/view_single_feedback');
const upload_image=require('./routes/upload_image');
const delete_image=require('./routes/delete_image');
const select_all_image=require('./routes/select_all_image');
const select_image=require('./routes/select_image');
const insert_video=require('./routes/insert_video');
const select_notification=require('./routes/select_notification');
const insert_image=require('./routes/insert_image');
const add_notification=require('./routes/add_notification');
const add_visitor=require('./routes/add_visitor');
const delete_notification=require('./routes/delete_notification');
const login_visitor=require('./routes/login_visitor');
const insert_healthform=require('./routes/insert_healthform');
const send_reset_password=require('./routes/send_reset_password');
const reset_password=require('./routes/reset_password');
const send_email=require('./routes/send_email');
const insert_vaccinationCard=require('./routes/insert_vaccination_card');
const select_news_feed=require('./routes/select_news_feed');
const upload_pp=require('./routes/upload_pp');
const upload_pp_officer=require('./routes/upload_pp_officer');
const insert_news=require('./routes/insert_news');
const flue=require('./routes/flue');
const retrieve_all_vistors=require('./routes/retrieve_all_vistors');
const states=require('./routes/states');
const select_pp=require('./routes/select_pp');
const select_pp_officer=require('./routes/select_pp_officer');
const delete_news=require('./routes/delete_news');
const two_items=require('./routes/two_items');
const insert_vaccination_card=require('./routes/insert_vaccination_card');
const select_vaccination=require('./routes/select_vaccination');
const select_visitor=require('./routes/select_visitor');
//instantiating 
app.use(cors());
app.use(bodyparser.json());

//creating database connection

const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'covid_compliance',port:'3306'});

//check the database  connection

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');}
        else{
            console.log('database connected.....');
        }
    

});




app.use('/viewall',viewall);
app.use('/delete',delete_user);
app.use('/view_user',view_user);
app.use('/add_user',add);
app.use('/update',update);
app.use('/login',login);
app.use('/update_officer',update_officer);
app.use('/login_officer',login_officer);
app.use('/get_all_records',records);
app.use('/retrieve_all_officers',officers);
app.use('/create_officer',create_officer);
app.use('/retrieve_entered_student',retrieve_entered_student);
app.use('/login_admin',login_admin);
app.use('/delete_officer',delete_officer);
app.use('/updateRecord',updateRecord);
app.use('/insertRecord',insertRecord);
app.use('/retrieve_officer',retrieve_officer);
app.use('/retrieve_all_form',retrieve_all_form);
app.use('/delete_feedback',delete_feedback);
app.use('/insert_feedback',insert_feedback);
app.use('/select_all_feedback',select_all_feedback);
app.use('/view_single_feedback',view_single_feedback);
app.use('/upload_image',upload_image);
app.use('/insert_image',insert_image);
app.use('/delete_image',delete_image);
app.use('/select_all_image',select_all_image);
app.use('/select_image',select_image);
app.use('/insert_video',insert_video);
app.use('/select_notification',select_notification);
app.use('/add_notification',add_notification);
app.use('/add_visitor',add_visitor);
app.use('/delete_notification',delete_notification);
app.use('/login_visitor',login_visitor);
app.use('/insert_healthform',insert_healthform);
app.use('/send_reset_password',send_reset_password);
app.use('/reset_password',reset_password);
app.use('/send_email',send_email);
app.use('/insert_vaccinationCard',insert_vaccinationCard);
app.use('/select_news_feed',select_news_feed);
app.use('/upload_pp',upload_pp);
app.use('/upload_pp_officer',upload_pp_officer);
app.use('/insert_news',insert_news);
app.use('/flue',flue);
app.use('/retrieve_all_vistors',retrieve_all_vistors);
app.use('/states',states);
app.use('/select_pp',select_pp);
app.use('/select_pp_officer',select_pp_officer);
app.use('/delete_news',delete_news);
app.use('/two_items',two_items);
app.use('/insert_vaccination_card',insert_vaccination_card);
app.use('/select_vaccination',select_vaccination);
app.use('/select_visitor',select_visitor);



//server
app.listen(3000,()=>{console.log('server running')})