
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
const multer = require('multer'); //npm install multer
const path =require('path');  // npm install path

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/videos/')     // './public/Profile_pic/' directory name where save the file and create those to folders
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 var upload = multer({
    storage: storage
});
 

router.post("/videos",upload.single('vid_path'), (req, res) => {

    let video_id=req.body.video_id;
    let videoName=req.body.videoName;
    let vid_path=req.vid_src;
    

    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var vid_src = 'http://3000/videos/' + req.file.filename
        var insertData = `INSERT INTO videos(video_name,video_path )VALUES('${videoName}','${vid_src}')`
        database.query(insertData, [vid_src], (err, result) => {
            if(err) 
            {
               console.log('encountered this error',err) 
            }else{
                console.log("file uploaded")
            }
    
           
        })
        
    }
});
