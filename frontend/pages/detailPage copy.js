import React, { useCallback,useEffect, useState, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/mainPosts_1001/mainPosts_1001'
import Comments1001 from '../components/mainPosts_1001/mainPosts_1001_comments copy'
import CommentTextArea from '../components/mainPosts_1001/mainPosts_1001_textArea'
import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTINSERT_REQUEST,
     MAINPOSTS_1001_COMMENTLIKE_REQUEST,
     MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST
    } 
from '../reducers/mainPosts_1001'; 

import {DislikeTwoTone,LikeTwoTone , UserOutlined, FieldTimeOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import custumDateFormat from  '../utilComponent/custumDateFormat';



const detailPage  = ({nickName,postFlag,postId}) =>{

  const dispatch = useDispatch(); 

  const {mainPosts_1001Info} = useSelector((state)=>state.mainPosts_1001); 

  //const {userInfo}      = useSelector((state)=>state.auth);
  const ref = createRef(); 
  const blank_pattern = /^\s+|\s+&/g;  
  const [insertClick, setInsertClick] = useState('');
  const [unfoldList,setUnfoldList] = useState('');  
  const [test,setTest] = useState(''); 

  // useEffect(()=>{
  //   setTest('hello Woorld'); 
  // },[])

  console.log('디테일 mainPosts_1001Info = >' ,mainPosts_1001Info); 
  useEffect(()=>{
    //상세 정보 
     dispatch({
          type:MAINPOSTS_1001_DETAIL_INFO_REQUEST, 
          data:{
            postId,
            nickName,
            postFlag,
          }
    });

  },[]);


  //좋아요, 싫어요 버튼 
  // const likeBtn =useCallback((commentid,flag,likeDislike)=>{
  //     if(!userInfo){
  //       alert('로그인이 필요한 서비스 입니다.'); 
  //       return;
  //     }

  //     if(flag==="Y"){
        
  //       alert('이미 좋아요! 싫어요! 했습니다.'); 
  //       return; 
  
  //     }else{

  //       //댓글 좋아요!
  //       dispatch({
  //         type:MAINPOSTS_1001_COMMENTLIKE_REQUEST, 
  //         data:{
  //           commentid,
  //           postFlag,
  //           postId,
  //           flag: likeDislike ,
  //           who: userInfo,
  //           nickName,
  //           mainPosts_1001Comments:[...mainPosts_1001Comments],
  //         }
  //     }); 

  //   }

  //    alert(`${likeDislike}`); 
    
  //   },[mainPosts_1001Comments]); 


  //댓글 입력 




      //대댓글 리스트 
      // const commentByCommentList =useCallback((postFlag,nickName,postId,commentId,byCommentCount)=>{


      //          if(byCommentCount > 0 ){
      
                
      //           setUnfoldList('unfold'); 
      //           dispatch({
      //               type:MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST,
      //               data:{
      //                   postFlag,
      //                   nickName,
      //                   postId,
      //                   commentId,
      //               }
      //           });      

      //           }else{
      //               //setUnfoldList('333'); 
      //           }
      // },[mainPosts_1001CommentByComments,unfoldList]); 





    return (
      
    <div >
      {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}
      <div className='divTable' style={{marginTop:'3%'}}>
            <div className='divTableRowTh'>
                <div className='divTableCellTh'>{mainPosts_1001Info[0].title} [{0}]</div>
           </div>
           <div className='divTableRow'>
                <div className='divTableCell'>
                  <UserOutlined />  {mainPosts_1001Info[0].userNickName}<br />
                  <FieldTimeOutlined />  {custumDateFormat(mainPosts_1001Info[0].createdDate)}<br />
                  <LikeTwoTone twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].good} <DislikeTwoTone  twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].bad} 
                </div>
           </div>
      </div>
    {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}

      <div style={{width:"100%",height:"auto", border:"1px solid", borderColor:"#8cc49c",marginTop:"1%"}}>
         광고입니다.
      </div>


    {/*상세 페이지 컨텐츠--------------------------------------------------------------------------------*/}
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1%"}}>
        <div dangerouslySetInnerHTML={{__html:mainPosts_1001Info[0].content}}/>
     </div> 
    {/*상세 페이지 컨텐츠--------------------------------------------------------------------------------*/}   


     <div style={{width:"100%",height:"auto", border:"1px solid", borderColor:"#8cc49c",marginTop:"1%"}}>
       광고입니다.
     </div>


    {/*좋아요 싫어요 버튼--------------------------------------------------------------------------------*/}
    <div className='divTable'>
      <div className='divTableRowTh' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button><LikeTwoTone  twoToneColor="#1ba640"/></Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button><DislikeTwoTone twoToneColor="#1ba640"/></Button>
      </div>
    </div>
    {/*좋아요 싫어요 버튼--------------------------------------------------------------------------------*/}




    {/*댓글 리스트--------------------------------------------------------------------------------*/}
      <Comments1001 />
    {/*댓글 리스트--------------------------------------------------------------------------------*/}

    </div>
        )
}


detailPage.getInitialProps = async (context) =>{

  const postId   = context.query.postId; 
  const nickName = context.query.nickName; 
  const postFlag = context.query.postFlag; 
  //const mainPosts_1001Info = JSON.parse(context.query.mainPosts_1001Info); 


  return {nickName,postFlag,postId}; 
}
export default detailPage; 