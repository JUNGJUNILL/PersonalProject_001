import React, { useCallback,useEffect, forwardRef,useState, createRef, useImperativeHandle,memo } from 'react'

//https://ko.reactjs.org/docs/hooks-reference.html#useimperativehandle

const InputBoxChilde = forwardRef(({clickedValues,abc},ref)=>{

    const [values, setValues] = useState(''); 
    

    const onChages = (e)=>{
        setValues(e.target.value); 
    }

    useImperativeHandle(ref, () => ({
        test : () => setValues(''),
    }));

    //자식함수
    const initValue = () =>{
        setValues(''); 
    }
    
    return (
        <div>
            <input type="text" value={values} onChange={onChages} />
            <button onClick={()=>abc(1,2,3)}>자식 버튼</button>
        </div>
        )
});

export default InputBoxChilde; 