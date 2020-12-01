
import React, { memo,useCallback,useEffect, useState, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTINSERT_REQUEST,
     MAINPOSTS_1001_COMMENTLIKE_REQUEST,
     MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST
    } 
from '../../reducers/mainPosts_1001'; 


const CreateUser =({ username, email, onChange, onCreate ,array})=>{
 
  const { mainPosts_1001Comments, } = useSelector((state)=>state.mainPosts_1001); 
  const [childeCount, setChildeCount] = useState(0); 
  const [array001,setArray001] = useState([...array]); 
  
  const dispatch = useDispatch(); 
  // useEffect(()=>{
  //   setArray001([...array]); 
  // },[])


  useEffect(()=>{

    dispatch({
      type:MAINPOSTS_1001_COMMENTS_REQUEST, 
      data:{
        postId:'10000001',
        nickName:'2222',
        postFlag:'1001',
        who:'nick1111', 
      }
    }); 

  },[])
  
  console.log('CreateUser=>',mainPosts_1001Comments);  

    return (
        <div>
          <input
            name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}
          />
          <input
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}
          />
          <button onClick={onCreate}>등록</button>
          {mainPosts_1001Comments && mainPosts_1001Comments.map((v,i)=>(
            <div key={i}>Hello  {i}</div>
          ))}<br />
          {childeCount}<br />
          <button onClick={()=>setChildeCount(childeCount+1)}>자식 컴포넌트</button>

        </div>
      );
}



export default memo(CreateUser);