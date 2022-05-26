
const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');
const router = express.Router();
const app=express();
module.exports = router;

const multer = require('multer');
const path =require('path');

app.use(cors());
app.use(bodyparser.json());
const database=require('./database');

//image ///////////////////////////////////////////////////////////////////////////////////////////////

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});
 
app.use('/pic_path',express.static('public/images'));
router.post("/image",upload.single('pic_path'), (req, res) => {

    let image_id=req.body.image_id;
    let pictureName=req.body.pictureName;
   //let pictureName="23 april";
    let pic_path=req.imgsrc;
    

    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        
       var imgsrc =`http://localhost:3000/select_image/view/`+req.file.filename
        var insertData = `INSERT INTO image(image_id,pictureName,pic_path )VALUES('NULL','${pictureName}','${imgsrc}')`
        database.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
    
            console.log("file uploaded")
        })
    }


        res.json({
            success:1,
            profile_url:`http://localhost:3000/select_image/view/${req.file.filename}`

        })

       

});