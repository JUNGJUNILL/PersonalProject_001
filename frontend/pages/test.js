import React, { useState,useEffect,useRef } from "react";
import Item from '../components/testComponent/Item'
import CreateUser from '../components/testComponent/CreateUser'
import UserList from '../components/testComponent/UserList'

const Test = () =>{

    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [array, setArray] = useState([]); 


    const addNumber = () => {
      setArray([...numbers]); 
        //배열 추가 시 
        //setNumbers(prev => [...prev, prev.length + 1]);
        
        console.log('numbers=>' , numbers, 'array=>' , array); 

      };

      useEffect(()=>{

        setArray([...numbers]); 
      },[]); 

    // const updateArray = () =>{

    //   setArray([...numbers]); 

    //   numbers.map((v,i)=>{
    //     if(v===1){
    //       array[i] = numbers[i]+1;  
    //     }
    //     if(v===2){
    //       array[i] = numbers[i]+1;  
    //     }
    //     console.log('vv=>',v); 
    //   })

    //   setArray(prev => [...array]);

    // }


    const [inputs, setInputs] =useState({username:'', email:'', }); 

    
    const { username, email } = inputs;

    const onChange = e =>{
      const {name, value} = e.target; 

      setInputs({
        ...inputs,[name]:value
      }); 
    }







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
    const onCreate = () => {
      
      const user = {
        id: nextId.current,
        username,
        email
      };
      
      setUsers([user,...users]);

      setInputs({
        username: '',
        email: ''
      });
  
      nextId.current += 1;
    };
    

    return (
      <div>
          <CreateUser 
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
          />
          <UserList users={users} />
      </div>
    )

}

export default Test; 