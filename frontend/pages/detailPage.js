import React, { useCallback,useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,} 
from '../reducers/mainPosts_1001'; 



const detailPage  = ({nickName,postFlag,postId}) =>{

  const dispatch = useDispatch(); 
  const [detailInfo, setDetailInfo] = useState('');
  
  useEffect(()=>{
  
    
    dispatch({
          type:MAINPOSTS_1001_DETAIL_INFO_REQUEST, 
          data:{
            postId,
            nickName,
            postFlag,
        
          }
    })

  },[]); 

  const abc = () =>{
    return {__html:`
    <p>굿모닝 입니다.</p>
    <figure class="image"><img src="http://localhost:3095/pictureTest1599725512431.jpg" alt="ㄴㄹ"></figure>
    `};
  } 

  const test = () =>{
    return {__html:`<div style="background:#52D4FF;width: 100px;height: 100px;margin:auto;padding:10px; border: 3px solid #73AD21;">a</div>`};
  } 




    return (
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div dangerouslySetInnerHTML={abc()} style={{}}></div>
    </div>         

        )
}


detailPage.getInitialProps = async (context) =>{
  const postId   = context.query.postId; 
  const nickName = context.query.nickName; 
  const postFlag = context.query.postFlag; 
  
  return {nickName,postFlag,postId}; 

}


export default detailPage; 