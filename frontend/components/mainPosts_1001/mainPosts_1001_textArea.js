import React, { useCallback,useEffect, useState, createRef ,forwardRef} from 'react'
import {Button} from 'antd'

//forwardRef
//https://ko.reactjs.org/docs/react-api.html#reactforwardref

const  CommentTextArea= forwardRef(({postFlag,nickName,postId,userInfo,insertComment,insertClick} ,ref) =>{

   // const ref = createRef(); 
    const [comment, setComment] = useState(''); 


  useEffect(()=>{

    if(insertClick ==='clicked'){
      setComment(''); 
    }

  },[insertClick.length > 0 ]); 


  //댓글 입력 textArea 
  const onChageComment =useCallback((e)=>{

    if(comment.length === 300){
      alert('300자 이상 입력 할 수 없습니다.'); 
      return; 
    }
    setComment(e.target.value); 

  },[comment]); 
  


    



return (
    <>
    <textarea  value={comment}  ref={ref} style={{width:"100%",height:"80px",marginTop:"3%"}} onChange={onChageComment} placeholder={ userInfo ? "댓글을 작성해 보세요!" : "로그인이 필요한 서비스 입니다."} readOnly={userInfo ? false : true}/>
   
    <div style={{margin:"1%",display:"block",float:"left"}}>
      {comment ? comment.length  : 0 } &#47; 300
    </div>

    {userInfo && 
        <div style={{margin:"1%",display:"block",float:"right"}}>
            <Button type="primary" onClick={()=>insertComment(postFlag,postId,nickName,comment)}>댓글달기</Button>
        </div>
    }

    </>
)

})

export default CommentTextArea; 