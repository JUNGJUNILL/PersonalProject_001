const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const pool = require('../DataBaseInfo');

const router = express.Router();


//회원가입 
router.post('/join', async (req,res,next)=>{
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

        return res.status(200).json(clientInsert);  

    }catch(e){
        console.log(e); 
        next(e); 
    }
});


//로그인 
router.post('/login',(req,res,next)=>{
    console.log(req.body.data); 
    passport.authenticate('local',(err,user,info)=>{
            //console.log('router/user/login==>',user); 
            if(err){
                    console.error(err); 
                    return next(err); 
            }

            if(info){
                    return res.status(401).send(info.reason); 
            }

            return req.login(user, async (loginErr)=>{

            try{
                if(loginErr){
                    console.log('loginERR==>' , loginErr); 
                    console.error(loginErr); 
                    return next(loginErr); 
            }
                

                let stringQuery = 'CALL US_SELECT_getUserInfo'; 
                stringQuery = stringQuery.concat(`('${user.userId}')`);

                const userInfo = await pool.query(stringQuery); 
                return res.json(userInfo); 
                 
                    
            }catch(e){
                    console.error(e);
                    next(e); 
            }
            });
    })(req,res,next); 

}); 
module.exports  = router; 