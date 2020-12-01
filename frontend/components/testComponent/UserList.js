
import React, { memo,useCallback,useEffect, useState, createRef } from 'react'


const UserList = ({users}) =>{


  const [array,setArray] = useState([]); 
  const [aaa,setAaa] = useState([]); 
  console.log('userList',array); 
  useEffect(()=>{
    setArray([...users]); 
  },[users])


  return (
    <div>
    {array.map((v,i)=>(
      <div key={i}>아이디: {v.id}   || <b>{v.username}</b>({v.email})
      </div>
    ))}

    </div>

  )
}

export default memo(UserList);