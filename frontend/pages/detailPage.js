import React, { useCallback,useEffect, useState, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/mainPosts_1001/mainPosts_1001'
import Comments1001 from '../components/mainPosts_1001/mainPosts_1001_comments'
import CommentTextArea from '../components/mainPosts_1001/mainPosts_1001_textArea'
import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTINSERT_REQUEST,
     MAINPOSTS_1001_COMMENTLIKE_REQUEST
    } 
from '../reducers/mainPosts_1001'; 

import {DislikeTwoTone,LikeTwoTone , UserOutlined, FieldTimeOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import custumDateFormat from  '../utilComponent/custumDateFormat';



const detailPage  = ({nickName,postFlag,postId}) =>{

  const dispatch = useDispatch(); 
  const {mainPosts_1001Info , 
         mainPosts_1001Comments,
        } = useSelector((state)=>state.mainPosts_1001); 

  const {userInfo}      = useSelector((state)=>state.auth);

  const blank_pattern = /^\s+|\s+&/g;  
  const [insertClick, setInsertClick] = useState(''); 


  useEffect(()=>{
  
    //댓글 리스트 
    dispatch({
      type:MAINPOSTS_1001_COMMENTS_REQUEST, 
      data:{
        postId,
        nickName,
        postFlag,
        who:userInfo, 
      }
    }); 

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
  const likeBtn =useCallback((commentid,flag,likeDislike)=>{
      if(!userInfo){
        alert('로그인이 필요한 서비스 입니다.'); 
        return;
      }

      if(flag==="Y"){
        
        alert('이미 좋아요! 싫어요! 했습니다.'); 
        return; 
  
      }else{

        //댓글 좋아요!
        dispatch({
          type:MAINPOSTS_1001_COMMENTLIKE_REQUEST, 
          data:{
            commentid,
            postFlag,
            postId,
            flag: likeDislike ,
            who: userInfo,
            nickName,
            mainPosts_1001Comments:[...mainPosts_1001Comments],
          }
      }); 

    }

     alert(`${likeDislike}`); 
    
    },[mainPosts_1001Comments]); 




  //댓글 입력 
  const insertComment = useCallback((postFlag,postId,nickName ,comment)=>{
    if(comment.length === 0 || comment.replace(blank_pattern,'')===""){
      
         
        alert('댓글을 입력해 주세요!'); 
          return; 
        }
    
        if(comment.length === 300){
          alert('300자 이상 입력 할 수 없습니다.'); 
          return; 
        }

          //댓글 입력
          dispatch({
            type:MAINPOSTS_1001_COMMENTINSERT_REQUEST, 
            data:{
              postId,
              postFlag,
              nickName ,
              who:userInfo, 
              comment,
            }
        });
        console.log('댓글 입력 후 ',mainPosts_1001Comments ); 
        //setMainPosts_1001_commentsArray([...mainPosts_1001Comments]); 
        //console.log('mainPosts_1001Comments=>' , mainPosts_1001Comments); 
        //
       
       
         //댓글 리스트 
        //   dispatch({
        //     type:MAINPOSTS_1001_COMMENTS_REQUEST, 
        //     data:{
          
        //       postId,
        //       nickName,
        //       postFlag,
        //       who:userInfo,
        //     }
        // }); 
       // console.log('빠락스 비어 Array=>' , mainPosts_1001_commentsArray); 
        // setMainPosts_1001_commentsArray([mainPosts_1001Comments[0],...mainPosts_1001_commentsArray]);

       //


      },[mainPosts_1001Comments]);








  








    return (
      
    <div >
    {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}
      <div className='divTable' style={{marginTop:'3%'}}>
            <div className='divTableRowTh'>
                <div className='divTableCellTh'>{mainPosts_1001Info[0].title} [{mainPosts_1001Comments.length}]</div>
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





    {/*댓글 입력--------------------------------------------------------------------------------*/}
   <CommentTextArea   
            postFlag={postFlag} 
            nickName={nickName} 
            postId={postId} 
            userInfo={userInfo}
            insertComment={insertComment}
            insertClick={insertClick}
   />
    {/*댓글 입력--------------------------------------------------------------------------------*/}




    {/*댓글 리스트--------------------------------------------------------------------------------*/}

    <div className="divTable">
      {mainPosts_1001Comments && mainPosts_1001Comments.map((v,i)=>

        <Comments1001 
              key={i}
              postFlag={postFlag} 
              nickName={nickName} 
              postId={postId} 
              userInfo={userInfo}
    
              commentId={v.commentId} 
              comment={v.comment} 
              who={v.who} 
              flag={v.flag} 

              good={v.good}
              bad={v.bad}      
              createdDate={v.createdDate} 
    
              likeBtn={likeBtn}

              clickedComponent={v.clickedComponent}
              likeDislikeflag={v.likeDislikeflag}
              />
      )
    
    }
    </div>
    {/*댓글 리스트--------------------------------------------------------------------------------*/}

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