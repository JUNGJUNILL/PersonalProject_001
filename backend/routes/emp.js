const express = require('express'); 
const router  = express.Router(); 
const pool = require('../DataBaseInfo'); 
const {isLoggedIn,vertifiyToken} = require('./middlewares')



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