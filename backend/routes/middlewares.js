const jwt = require('jsonwebtoken'); 


exports.isLoggedIn = (req,res,next)=>{

  if(req.isAuthenticated()){
      next(); 
      //next()를 하면 다음 미들웨어로 간다. 
  }else{
      res.status(401).send('로그인이 필요합니다.'); 
  }


};



exports.isNotLoggedIn = (req,res,next)=>{

if(!req.isAuthenticated()){
  next(); 
  //next()를 하면 다음 미들웨어로 간다. 
}else{
  res.status(401).send('로그인 한 사용자는 접근할 수 없습니다.'); 
}


};


exports.vertifiyToken = (req,res,next) =>{

  try{
    //쿠키에 저장된 토큰 유요성 검증 
    req.decoded = jwt.verify(req.cookies[process.env.COOKIE_SECRET],process.env.JWT_SECRET); 

  
    return next(); 

  }catch(e){

    if(e.name ==='TokenExpiredError'){ //토큰 유효기간 초과
      return res.status(419).json({
        conde:419,
        message:'토큰이 만료되었습니다.', 
      }); 
    }

    return res.status(401).json({
      code:401,
      message : '유효하지 않는 토큰입니다.', 
    })

  }

}