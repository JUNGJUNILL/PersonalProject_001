const passport = require('passport'); 
const {Strategy : LocalStrategy } = require('passport-local'); 
const bcrypt = require('bcrypt'); 
const pool = require('../DataBaseInfo');

module.exports = () =>{


    passport.use(new LocalStrategy({

        usernameField : 'userId', 
        passwordField: 'password', 

    }, async (userId,password,done)=>{

        try{
                let stringQuery = 'CALL US_SELECT_getUserInfo'; 
                stringQuery = stringQuery.concat(`('${userId}')`);
                const user = await pool.query(stringQuery); 

                if(!user){
                    return done(null,false,{reason:'존재하지 않는 사용자 입니다.'}); 
                }

                const result = await bcrypt.compare(password,user[0][0].password); 
                
                //로그인 성공 
                if(result){
                    return done(null,user[0][0]); 
                }

                return done(null,false,{reason:'비밀번호가 틀립니다.'}); 

        }catch(e){
            console.error(e); 
            return done(e); 
        }
    })); 
}; 