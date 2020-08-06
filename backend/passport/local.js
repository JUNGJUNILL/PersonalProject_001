const passport = require('passport'); 
const {Strategy : LocalStrategy } = require('passport-local'); 
const bcrypt = require('bcrypt'); 


module.exports = () =>{

    passport.use(new LocalStrategy({

    }, async ()=>{



        
    })); 



}