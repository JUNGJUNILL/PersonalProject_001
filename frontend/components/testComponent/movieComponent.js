
import React, {memo, useState,useEffect,useRef } from "react";

const MovieName =() =>{

    const [a,Aset] = useState(''); 

    useEffect(()=>{

     //   Aset('Aset'); 
    },[])

    console.log('a=>',a); 
    return (
        <div>{a}
        <input type="button" value='clickcName' onClick={()=>Aset('hello world')} /> 
        </div>
        
    )
}

export default MovieName; 
//메모 사용 시 부모 컴포넌트의 state가 변하여도 자식 컴포넌트는 리렌더링되지 않는다.
//export default MovieName; 

