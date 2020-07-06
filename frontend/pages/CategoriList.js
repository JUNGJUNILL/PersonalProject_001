import React ,{useState,useCallback,useEffect,createRef}from 'react'



const CategoriList =() =>{

    const idRef = createRef(); 
    const [colorValue , setColorValue] = useState(false); 

        const test = () =>{

            setColorValue(!colorValue); 
            const values = idRef.current.value; 
        }
    
    return (
        <>
           <div className="sidenav"><h1>sdsdsd</h1></div>
           <button onClick={test}>버튼</button>
           <input type="text" ref={idRef} style={{color: colorValue ? "red" : "blue"}} value="ee" />
        </>
    )


}

export default CategoriList; 