
import React, { memo,useCallback,useEffect, useState, createRef } from 'react'
import Nicola from '../components/testComponent/Nicola'

const Parent = () =>{


    const [count,setCount] = useState(0); 
    const [name,setName]   = useState('정준일'); 


    useEffect(()=>{
        setTimeout(setName, 5000,"Dal");
    })


    console.log('Parent')
    return(

        <div>
            <span>{count}</span><br />
            <button onClick={()=> setCount(count+1)}>Count</button><br/>
            <Nicola name={name} />
        </div>
    )

}

export default Parent; 