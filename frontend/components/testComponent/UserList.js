
import React, { useCallback,useEffect, useState, createRef } from 'react'


const UserList = ({users}) =>{


  const [array,setArray] = useState([]); 

  useEffect(()=>{
    setArray([...users]); 
  },[users])

  console.log(users); 
  // useEffect(()=>{
  //   console.log(users); 
  //   setArray([...users]); 
  // },[])
  

  return (
    <div>
    {array.map((v,i)=>(
      <div key={i}>아이디: {v.id}   || <b>{v.username}</b>({v.email})
      </div>
    ))}
    </div>

  )
}

export default UserList;