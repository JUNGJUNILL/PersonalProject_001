const express = require('express');
const passport = require('passport');
const {isLoggedIn , vertifiyToken} = require('./middlewares')
const bcrypt = require('bcrypt');
const pool = require('../DataBaseInfo');
const jwt = require('jsonwebtoken'); 
const router = express.Router();






//게시글 SELECT
router.post('/', async (req,res,next)=>{

    try{    
        const {postFlag, currentPage, maxPage}= req.body.data;   
        let stringQuery = 'CALL US_SELECT_mainPosts'; 
            stringQuery =stringQuery.concat(`('${postFlag}',`);
            stringQuery =stringQuery.concat(`${currentPage},`); 
            stringQuery =stringQuery.concat(`${maxPage})`);

        const mainPosts_1001_List = await pool.query(stringQuery); 
        console.log(stringQuery); 
        return res.json(mainPosts_1001_List[0]); 
      

    }catch(e){
        console.log(e); 
        next(e); 
    }

}); 


//게시글 상세정보 
router.post('/mainPosts_1001Detail', async (req,res,next)=>{

    try{    
        const {postId, nickName, postFlag}= req.body.data; 


        //(쿠키가 없는 경우 게시글 정보로 쿠키생성)
        if(!req.cookies[process.env.HITCOUNT_COOKIE] || req.cookies[process.env.HITCOUNT_COOKIE] !== postId+nickName+postFlag){

            let rowQuery ='CALL US_UPDATE_mainPostsHit'; 
            rowQuery =rowQuery.concat(`('${postId}',`);
            rowQuery =rowQuery.concat(`'${nickName}',`); 
            rowQuery =rowQuery.concat(`'${postFlag}')`);
            console.log(rowQuery); 
            await pool.query(rowQuery); 
         
            res.cookie(process.env.HITCOUNT_COOKIE,postId+nickName+postFlag,
                {httpOnly:true,
                secure:false,
            }); 

        }


        let stringQuery = 'CALL US_SELECT_mainPostsDetail'; 
            stringQuery =stringQuery.concat(`('${postId}',`);
            stringQuery =stringQuery.concat(`'${nickName}',`); 
            stringQuery =stringQuery.concat(`'${postFlag}')`);

        const mainPosts_1001Detail = await pool.query(stringQuery); 
        console.log(stringQuery); 
        return res.json(mainPosts_1001Detail[0]); 
      

    }catch(e){
        console.log(e); 
        next(e); 
    }

}); 


//게시글 댓글 리스트 
router.post('/mainPosts_1001Comments', async (req,res,next)=>{


    try{

        const {postId, nickName, postFlag}= req.body.data; 
        

        let stringQuery = 'CALL US_SELECT_mainPostComments'; 
        stringQuery =stringQuery.concat(`('${postFlag}',`);
        stringQuery =stringQuery.concat(`'${postId}',`); 
        stringQuery =stringQuery.concat(`'${nickName}')`);

        const mainPosts_1001Comments = await pool.query(stringQuery); 
        console.log(stringQuery); 
        return res.json(mainPosts_1001Comments[0]); 



    }catch(e){
        console.log(e); 
        next(e); 
    }


}); 



//게시글 댓글 INSERT
router.post('/mainPosts_1001CommentInsert', async (req,res,next)=>{


    try{

        const { postId,
                postFlag,
                nickName,
                comment,}= req.body.data; 
        

        let stringQuery = 'CALL US_INSERT_mainPostsComments'; 
        stringQuery =stringQuery.concat(`('${postId}',`);
        stringQuery =stringQuery.concat(`'${postFlag}',`); 
        stringQuery =stringQuery.concat(`'${nickName}',`); 
        stringQuery =stringQuery.concat(`'${comment}')`);

        const mainPosts_1001CommentInsert = await pool.query(stringQuery); 
        console.log(stringQuery); 
        return res.json(mainPosts_1001CommentInsert[0]); 



    }catch(e){
        console.log(e); 
        next(e); 
    }


}); 




module.exports  = router; 