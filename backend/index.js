const express = require('express'); 
const cors = require('cors'); 
const morgan = require('morgan'); 
const cookieParser = require('cookie-parser'); 
const expressSession = require('express-session'); 
const dotenv = require('dotenv');
const app= express(); 
dotenv.config(); 



const empAPIRouter = require('./routes/emp'); 

app.use(morgan('dev')); 
app.use(cors({
    origin:true,
    credentials:true, 
})); //프론트 백엔드간 쿠키주고 받기 위함, 

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave : false,             //매번 세션 강제 저장
    saveUninitialized : false,  //빈 값도 저장
    secret: process.env.COOKIE_SECRET, 
    cookie :{
        httpOnly : true, 
        secure: false, //https 시 true
      //  maxAge : 1000*60*60,
    },
    name:'rnbck',

}));

app.use('/api/emp',empAPIRouter); 

app.listen(3095,()=>{
    console.log('server is Runnig in 3095 port'); 
})