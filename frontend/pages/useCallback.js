import React, {useState, useMemo, useCallback,useRef ,current} from 'react'




const Test2 = () =>{
    console.log('ComponentTest2'); 
    const [value, setValue] = useState(0);
    const handleClick = useCallback(()=>{ 

        console.log('clicked!',value)},[value])

    const nomal = ()=>{
        console.log('nomal btn' , value); 
    }

       return (

        <div>
        <p>
          현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
        <button onClick={handleClick} >useCallback</button>
        <button onClick={nomal} >그냥버튼</button>
      </div>
    )

}


export default Test2; 