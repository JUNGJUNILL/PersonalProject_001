import React, { useCallback } from 'react'
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


                                 
                                 
    return (
        <div>
            카운드 : {count.number}
            <button onClick={toggle('plus')}>더하기</button>
            <button onClick={toggle('minus')}>빼 기</button>
        </div>
    )

}

export default Count;