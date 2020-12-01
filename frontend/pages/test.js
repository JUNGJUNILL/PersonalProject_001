import React, { useState,useEffect,useRef ,memo, useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';

import Item from '../components/testComponent/Item'
import CreateUser from '../components/testComponent/CreateUser'
import UserList from '../components/testComponent/UserList'
import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTINSERT_REQUEST,
     MAINPOSTS_1001_COMMENTLIKE_REQUEST,
     MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST
    } 
from '../reducers/mainPosts_1001'; 
import { Badge } from 'antd';

const Test = () =>{
  /*
    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [array, setArray] = useState([]); 


    const addNumber = () => {
      setArray([...numbers]); 
        //배열 추가 시 
        //setNumbers(prev => [...prev, prev.length + 1]);
        
        console.log('numbers=>' , numbers, 'array=>' , array); 

      };
  */
  //const { mainPosts_1001Comments, } = useSelector((state)=>state.mainPosts_1001); 

 const dispatch = useDispatch(); 


 const [a,setA] = useState(''); 
 const [b,setB] = useState(''); 
  // useEffect(()=>{
  //  // 댓글 리스트 
  //   // dispatch({
  //   //   type:MAINPOSTS_1001_COMMENTS_REQUEST, 
  //   //   data:{
  //   //     postId:'10000001',
  //   //     nickName:'2222',
  //   //     postFlag:'1001',
  //   //     who:'nick1111', 
  //   //   }
  //   // }); 


  //   setA('dddd'); 
  //   // setB('DDDDDDDDDDDDDD'); 

  // },[]); 
  
 console.log('hello world',a); 

    const [inputs, setInputs] =useState({username:'', email:'', }); 
    const [count,setCount]= useState(0);
    
    const { username, email } = inputs;

    // const onChange = e =>{
    
    // }

    const onChange = useCallback((e)=>{
      const {name, value} = e.target; 

      
      setInputs({
        ...inputs,[name]:value
      }); 
    },[name])

    const [users, setUsers] = useState([
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ]);
  
    const nextId = useRef(4);
    const onCreate = useCallback(() => {
      
      const user = {
        id: nextId.current,
        username,
        email
      };
      
      //추가된 데이터를 위로 올리기 
      setUsers([user,...users]);

      //추가된 데이터를 아래로 올리기 
      //setUsers([...users,user]);


      setInputs({
        username: '',
        email: ''
      });
  
      nextId.current += 1;
    },[]);
    

    return (
      <div>
          <CreateUser 
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
            array={users}
          /><br />
          {count}
          <button onClick={()=>setCount(count+1)}>click</button>
      </div>
    )

}

export default Test; 