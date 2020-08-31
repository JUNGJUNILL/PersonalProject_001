const express = require('express'); 
const router  = express.Router(); 
const pool = require('../DataBaseInfo'); 
const {isLoggedIn,vertifiyToken} = require('./middlewares'); 
const multer =require('multer'); 
const path   =require('path');




const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads');
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext); // 제로초.png, ext===.png, basename===제로초
        done(null, basename + new Date().valueOf() + ext);
      },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
  });

    //이미지 업로드
                               //none
                               //fields
                               //single
router.post('/images',upload.array('image'),(req,res)=>{

    return res.json(req.files.map(v=>v.filename)); 

}); 
  



router.post('/', async (req,res,next)=>{

    try{    
        const {name , job, currentPage, maxPage}= req.body.data;   
        let stringQuery = 'CALL US_SELECT_emp'; 
            stringQuery =stringQuery.concat(`('${name}',`);
            stringQuery =stringQuery.concat(`'${job}',`); 
            stringQuery =stringQuery.concat(`${currentPage},`); 
            stringQuery =stringQuery.concat(`${maxPage})`);
        const emplist = await pool.query(stringQuery); 
        
        res.json(emplist[0]); 
        console.log(stringQuery); 

    }catch(e){
        console.log(e); 
        next(e); 
    }

}); 


module.exports  = router; 