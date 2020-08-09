const passport = require('passport'); 
const {Strategy : LocalStrategy } = require('passport-local'); 
const bcrypt = require('bcrypt'); 
const pool = require('../DataBaseInfo');


module.exports = () =>{

    passport.use(new LocalStrategy({

        usernameField: 'userId', 
        passwordField: 'password', 

    }, async (userId,password,done)=>{

        try{
             

        //    let stringQuery = 'CALL US_SELECT_getUserInfo'; 
          //  stringQuery = stringQuery.concat(`('${userId})'`);
          //  const userInfo = await pool.query(stringQuery); 
       //     console.log('userInfo ==> ' , userInfo); 
       const userInfo = "";//await pool.query(stringQuery);
            //아이디가 없어
            if(!userInfo){
                return done(null,false,{reason:'존재하지 않는 사용자 입니다.'}); 
            }


            const result = await bcrypt.compare(password,userInfo[0].password); 

            //로그인 성공
            if(result){
                return done(null,userInfo); 
            }

            //비밀번호가 다름 
            return done(null,false,{reason:'비밀번호가 틀립니다.'}); 



        }catch(e){
            console.error(e); 
            return done(e); 
        }

        
    })); 



}