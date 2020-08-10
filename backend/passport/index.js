const passport = require('passport'); 
const local    = require('./local'); 
const pool = require('../DataBaseInfo');


module.exports = () =>{


    passport.serializeUser((user,done)=>{
        console.log('user.userId=>' , user.userId)
        return done(null,user.userId); 
    }); 

    //매 요청마다 실행됨, 캐싱을 해줘야 한다. 
    passport.deserializeUser( async(id,done)=>{

        try{
            let stringQuery = 'CALL US_SELECT_getUserInfo'; 
            stringQuery = stringQuery.concat(`('${id}')`);
            const userInfo = await pool.query(stringQuery); 
     
            return done(null,userInfo); 

        }catch(e){
            console.log('passport/index.js ===>' , e); 
            console.error(e); 
            return done(e); 
        }
    }); 

    local(); 

}