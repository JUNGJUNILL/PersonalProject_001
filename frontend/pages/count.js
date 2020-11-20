import React, { useCallback ,createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {COUNT_PLUS_REQUEST,countMinusActionm,COUNT_MINUS_REQUEST}from '../reducers/count';


const Count = () =>{


    const dispatch = useDispatch(); 
    const count    = useSelector(state => state.count); 
                                 //store의 state를 불러오는 hook 
                                 //store의 state 중에서 count의 state를 불러온다.

    const toggle = useCallback(param=>()=>{
        
        if(param ==='plus'){
           return  dispatch({type:COUNT_PLUS_REQUEST}); 
        }else if(param ==='minus'){
            return dispatch({type:COUNT_MINUS_REQUEST});  
        }else{
            return; 
        }
    },[]); 

    const array = ["array1","array2","array3"]



    const ref = createRef(); 

    const onChageedFunc = (e)=>{
            console.log('sex-->  ',e.target.value); 
    }
    const testBtn = (ref)=>{

       // onChageedFunc(e); 
       // console.log(e.target.name);
      console.log(ref.current.value); 
        //console.log( ref.current.getElementById("good").value); 
      
    }
                                 
                              
    return (
        <div>

            <input type="text" ref={ref} name={"a01"} onChange={onChageedFunc} value={"text01"}/><input type="button" value="버튼1" onClick={()=>testBtn(ref)}/><br/>

        </div>
 


















   
    )

}

export default Count;