const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const pool = require('../DataBaseInfo');

const router = express.Router();


router.post('/', async (req,res,next)=>{
    try{

        
        const {id,nickname,password,email,phone,address} = req.body.data; 
        const hashedPassword = await bcrypt.hash(password,12); 
        let stringQuery = 'CALL US_INSERT_client'; 
            stringQuery = stringQuery.concat(`('${id}',`)
            stringQuery = stringQuery.concat(`'${nickname}',`)
            stringQuery = stringQuery.concat(`'${hashedPassword}',`)
            stringQuery = stringQuery.concat(`'${password}',`)
            stringQuery = stringQuery.concat(`'${password}',`)
            stringQuery = stringQuery.concat(`'${password}',`)
            stringQuery = stringQuery.concat(`'${email}',`)
            stringQuery = stringQuery.concat(`'${phone}',`)
            stringQuery = stringQuery.concat(`'${address}')`)

        const clientInsert = await pool.query(stringQuery);
        //OkPacket { affectedRows: 0, insertId: 0, warningStatus: 0 } 
        // console.log('clientInsert ===> ' , clientInsert); 
        // res.json(clientInsert[0]); 
        // console.log(clientInsert[1][0], stringQuery,req.cookies['COOKIE_SECRET']); 
        return res.status(200).json(clientInsert);  

    }catch(e){
        console.log(e); 
        next(e); 
    }
});

module.exports  = router; 