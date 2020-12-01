
import React, { memo,useCallback,useEffect, useState, createRef } from 'react'



const Nicola= memo(({name})=>{
    //memo를 씌움으로써 
    //name props가 바뀔 떄만 해당 컴포넌트가 렌더링되게 
    //(필요없는 렌더링을 막을 때 '리엑트 메모'는 날 구원할 것이다.)

    
  const [childeCount, setChildeCount] = useState(0); 
    console.log('Childe')

    return(
        <div>{name}<br />
        {childeCount} <br />
        <button onClick={()=>setChildeCount(childeCount+1)}>자식 클릭</button>
        </div>
    )

}); 

export default Nicola;