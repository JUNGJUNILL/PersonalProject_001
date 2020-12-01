import React, { useCallback,useEffect, useState, createRef, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import custumDateFormat from  '../../utilComponent/custumDateFormat';

import Comment1001ByComments from './mainPosts_1001_commentByComments'
import CommentTextArea       from './mainPosts_1001_textArea'
import {DislikeTwoTone,LikeTwoTone} from '@ant-design/icons'
import 
    {
        MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST,
    } 
from '../../reducers/mainPosts_1001'; 
import { Badge } from 'antd';

const Comments1001 = ({
                      postFlag,
                      nickName,
                      postId,
                      userInfo,

                      commentId,
                      comment,
                      who,
                      flag,
                      
                      good,
                      bad,
                      createdDate,

                      likeBtn,

                      clickedComponent,
                      likeDislikeflag,
                      byCommentCount,
                      commentByCommentList,
                      mainPosts_1001CommentByComments,
                      unfoldList,

                    })=>{
                
                        
        const dispatch = useDispatch();
        const {clickCommentId} = useSelector((state)=>state.mainPosts_1001); 
        const ref = createRef(); 
        const blank_pattern = /^\s+|\s+&/g;  
        
    //대댓글 입력 
  const insertComment = useCallback((postFlag,postId,nickName ,comment)=>{
   
    if(comment.length === 0 || comment.replace(blank_pattern,'')===""){
      
         
        alert('댓글을 입력해 주세요!'); 
        ref.current.focus();  
        return; 
        }


        dispatch({
            type:MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST, 
            data:{
                postFlag,
                nickName,
                postId,
                commentId,
                who:userInfo,
                comment,   
            }
        })
      },[mainPosts_1001CommentByComments]);



    return (
        <>
                <div  className='divTableRow' >
                    <div  className="divTableCell">
                   
                    <b>{who}</b> &nbsp; <small>{custumDateFormat(createdDate)}</small><br/>
                    {comment}<br />
                    <a onClick={()=>commentByCommentList(postFlag,nickName,postId,commentId,byCommentCount)}>{byCommentCount === 0 ? `댓글달기` : `댓글[${byCommentCount}]` }</a> {commentId}
                   
                        <div  style={{marginTop:"1%",display:"block",float:"right"}}>
                            <LikeTwoTone onClick={()=>likeBtn(commentId,flag,'good')} twoToneColor={clickedComponent && likeDislikeflag==='good' ? "#ff0000" : "#1ba640"}/>{clickedComponent && likeDislikeflag==='good' ? parseInt(good)+1:good}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <DislikeTwoTone onClick={()=>likeBtn(commentId,flag,'bad')} twoToneColor={clickedComponent && likeDislikeflag==='bad' ? "#ff0000" : "#1ba640"} />{clickedComponent && likeDislikeflag==='bad' ? parseInt(bad)+1:bad}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                        </div> 
                    </div>
                </div>  
                {unfoldList ==='unfold' && clickCommentId === commentId && mainPosts_1001CommentByComments && mainPosts_1001CommentByComments.map((v,i)=>(
                    <Comment1001ByComments                  
                            key={i}
                            postFlag={postFlag}
                            nickName={nickName}
                            postId={postId}
                            userInfo={userInfo}
                            commentId={commentId}

                            byCommentId={v.byCommentId}
                            comment={v.comment}
                            who={v.who}

                            good={v.good}
                            bad={v.bad}
                            createdDate={v.createdDate}
                    />
                    
                ))}
               {unfoldList ==='unfold' && clickCommentId ===commentId && byCommentCount > 0 && 
                    <CommentTextArea   
                                postFlag={postFlag} 
                                nickName={nickName} 
                                postId={postId} 
                                userInfo={userInfo}
                                insertComment={insertComment}
                                insertClick={'good'}
                                ref={ref}               
                            />
                }
        </>   


                
    )

}

export default memo(Comments1001); 