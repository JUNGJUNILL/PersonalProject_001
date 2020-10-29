import React, { useCallback,useEffect, useState, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTINSERT_REQUEST,
    } 
from '../reducers/mainPosts_1001'; 

import {DislikeTwoTone,LikeTwoTone , UserOutlined, FieldTimeOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import custumDateFormat from  '../utilComponent/custumDateFormat';



const detailPage  = ({nickName,postFlag,postId}) =>{

  const dispatch = useDispatch(); 
  const ref = createRef(); 
  const [comment, setComment] = useState(''); 
  const blank_pattern = /^\s+|\s+&/g;  

  const {mainPosts_1001Info , mainPosts_1001Comments} = useSelector((state)=>state.mainPosts_1001); 
  const {userInfo}                                    = useSelector((state)=>state.auth);


  const test = () =>{
    setComment(''); 
  }
  //댓글 입력 textArea 
  const onChageComment =useCallback((e)=>{



    if(comment.length === 300){
      alert('300자 이상 입력 할 수 없습니다.'); 
      return; 
    }
    setComment(e.target.value); 

  },[comment]); 


  //댓글 입력 insert 
  const insertComment = (e)=>{


    if(comment.length === 0 || comment.replace(blank_pattern,'')===""){
      ref.current.focus();  
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
          nickName,
          comment,
        }
    });

    setComment(''); 

    //댓글 리스트 
      dispatch({
        type:MAINPOSTS_1001_COMMENTS_REQUEST, 
        data:{
          postId,
          nickName,
          postFlag,
        }
    }); 

    


  };

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

    //댓글 리스트 
    dispatch({
          type:MAINPOSTS_1001_COMMENTS_REQUEST, 
          data:{
            postId,
            nickName,
            postFlag,
          }
    }); 

  },[]); 

    return (
    <>
    {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}
      <div className='divTable' style={{marginTop:'3%'}}>
            <div className='divTableRowTh'>
                <div className='divTableCellTh'>{mainPosts_1001Info[0].title} [{mainPosts_1001Comments.length}]</div>
           </div>
           <div className='divTableRow'>
                <div className='divTableCell'>
                  <UserOutlined />  {mainPosts_1001Info[0].userNickName}<br />
                  <FieldTimeOutlined />  {custumDateFormat(mainPosts_1001Info[0].createdDate)}<br />
                  <LikeTwoTone twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].good} <DislikeTwoTone twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].bad} 
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
          <Button><LikeTwoTone twoToneColor="#1ba640"/></Button>&nbsp;&nbsp;<Button><DislikeTwoTone twoToneColor="#1ba640"/></Button>
      </div>
    </div>
    {/*좋아요 싫어요 버튼--------------------------------------------------------------------------------*/}





    {/*댓글 입력--------------------------------------------------------------------------------*/}
    <textarea  value={comment} ref={ref} style={{width:"100%",height:"80px",marginTop:"3%"}} onChange={onChageComment} placeholder={ userInfo ? "댓글을 작성해 보세요!" : "로그인이 필요한 서비스 입니다."} readOnly={userInfo ? false : true}/>
   
    <div style={{margin:"1%",display:"block",float:"left"}}>
      {comment ? comment.length  : 0 } &#47; 300
    </div>

    <div style={{margin:"1%",display:"block",float:"right"}}>
      <Button type="primary" onClick={insertComment}>댓글달기</Button>
    </div>
    {/*댓글 입력--------------------------------------------------------------------------------*/}




    {/*댓글 리스트--------------------------------------------------------------------------------*/}
    <div className="divTable">
    {mainPosts_1001Comments.map((v,i)=>(
    <div className='divTableRow' >
        <div className="divTableCell">
          <b>{v.userNickName}</b> &nbsp; <small>{custumDateFormat(v.createdDate)}</small><br/>
          {v.comment}<br />
          답글 [9]
          <div style={{marginTop:"1%",display:"block",float:"right"}}>
            <LikeTwoTone twoToneColor="#1ba640"/>&nbsp;&nbsp;<DislikeTwoTone twoToneColor="#1ba640"/>&nbsp;&nbsp;<br />
          </div>
        </div>
    </div>

    ))}
    </div>
    {/*댓글 리스트--------------------------------------------------------------------------------*/}

    </>
        )
}


detailPage.getInitialProps = async (context) =>{

  const postId   = context.query.postId; 
  const nickName = context.query.nickName; 
  const postFlag = context.query.postFlag; 
  return {nickName,postFlag,postId}; 
}
export default detailPage; 