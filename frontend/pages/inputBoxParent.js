import React, { useCallback,useEffect, useState, createRef, memo ,useRef} from 'react'



import InputBoxChilde from '../components/testComponent/inputBoxChilde'


//부모의 버튼을 클릭 시 자식의 함수를 실행시키게 하기 
//도대체 어떻게 해야할까?
//KeyWords : forwardRef, useImperativeHandle
//https://velog.io/@hwang-eunji/React-Hooks-9-useImperativeHandle      예제 
//https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle 공식문서 
const InputBoxParent =()=>{

    const [initValue, setInitValue]= useState(''); 
    const [testValue , setTestValue] = useState(''); 
    const parentRef =createRef(); 
    const testRef =createRef(); 

    console.log('parentRef.current' , parentRef.current); 
    //부모버튼 
    const init = () =>{
    
        if(parentRef.current){
            console.log('current exsist ?');
            parentRef.current.test(); 
        }else{
            console.log('current dosen t exsist ?');
        }
    }

    const testChange = (e)=>{
        setTestValue(e.target.value); 
    }

    const testBtn=()=>{
        testRef.current.focus(); 
    }

    


    const abc = (a,b,c) =>{
        console.log(`hello abc ${a},${b},${c}`); 
        if(parentRef.current){
            console.log('current exsist ?');
            parentRef.current.test(); 
        }else{
            console.log('current dosen t exsist ?');
        }
    }

    
    return (
        <div>
            <InputBoxChilde clickedValues={initValue} init={initValue} ref={parentRef} abc={abc} />  
            <input type="text" ref={testRef} value={testValue} onChange={testChange}/>
            <button onClick={init}>부모버튼</button>
            <button onClick={testBtn}>포커스</button>
        </div>
        )

}

export default InputBoxParent; 
