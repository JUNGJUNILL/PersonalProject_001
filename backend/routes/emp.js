const express = require('express'); 
const router  = express.Router(); 
const pool = require('../DataBaseInfo'); 



router.post('/', async (req,res,next)=>{

    try{
        const emplist = await pool.query(`CALL  US_SELECT_emp('','')`); 
        console.log(emplist); 

    }catch(e){
        console.log(e); 
        next(e); 
    }

}); 


module.exports  = router; 