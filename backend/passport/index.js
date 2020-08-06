const passport = require('passport'); 
const local    = require('./local'); 


module.exports = () =>{


    passport.serializeUser((user,done)=>{

        return done(null,user.id); 
    }); 

    //매 요청마다 실행됨, 캐싱을 해줘야 한다. 
    passport.deserializeUser( async(id,done)=>{

        try{
            const user = ""; 
            return done(null,user); 

        }catch(e){
            console.error(e); 
            return done(e); 
        }
    }); 

    local(); 

}