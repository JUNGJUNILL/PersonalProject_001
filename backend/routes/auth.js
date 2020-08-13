const express = require('express');
const passport = require('passport');
const {isLoggedIn , vertifiyToken} = require('./middlewares')
const bcrypt = require('bcrypt');
const pool = require('../DataBaseInfo');
const jwt = require('jsonwebtoken'); 
const router = express.Router();


//유저정보 유지 
router.get('/',vertifiyToken,(req,res)=>{
    try{
        const userInfo = req.decoded; //req.decoded 토큰 정보 저장 
                                      //req.user    세션정보 저장(일반 로그인)
        
        if(userInfo){
            return res.json(userInfo); 
        }
    }catch(e){
        console.log(e); 
        next(e); 
    }
}); 


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

//단순 passport local
//로그인 
/*
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

                const User = await pool.query(stringQuery); 
                delete User[0][0].password; 
                const userInfo =User[0][0]; 
                return res.json(userInfo); 
                 
                    
            }catch(e){
                    console.error(e);
                    next(e); 
            }
            });
    })(req,res,next); 

}); 
*/

//jwt 로그인
router.post('/login',async (req,res,next)=>{


            try{

                const {userId , password} = req.body.data;  
                console.log(userId,password); 


                let stringQuery = 'CALL US_SELECT_getUserInfo'; 
                stringQuery = stringQuery.concat(`('${userId}')`);
                const user = await pool.query(stringQuery); 
                if(!user){
                    return res.status(401).json({
                        code:401,
                        message: '등록되지 않는 아이디 입니다.', 
                    }) ;
                }

                const result = await bcrypt.compare(password,user[0][0].password);
                delete user[0][0].password;  
                const userInfo = user[0][0]; 
                
                //로그인 성공 
                if(result){
                    
                    const token = jwt.sign({
                                nick:userInfo.userNickName, 
                    },
                    process.env.JWT_SECRET, 
                    {
                        expiresIn :'120m', //분, 
                        issuer:'wah',  

                    }); 
                    //토큰을 쿠키에 저장함.                  
                    res.cookie(process.env.COOKIE_SECRET, token ,{httpOnly:true,
                                                                  secure:false, 
                    }); 
                

                    return res.json({
                        code: 200, 
                        message:'토큰이 발급되었습니다.', 
                        token 
                    });

                }

            }catch(e){
                console.error(e); 
                next(e); 

            }

});


//로그아웃 
router.get('/logOut',(req,res)=>{

    res.clearCookie(process.env.COOKIE_SECRET); 
    res.json('쎆?ㅆ1'); 

}); 

module.exports  = router; 