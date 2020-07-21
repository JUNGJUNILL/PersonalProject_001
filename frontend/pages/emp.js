import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 
    {EMP_LIST_REQUEST,
     EMP_LIST_SUCCESS,
     EMP_LIST_FAILURE
    } 
from '../reducers/emp'; 


const Emp = () =>{


    const dispatch = useDispatch(); 
    const {emplist}    = useSelector(state => state.emp); 
                                 //store의 state를 불러오는 hook 
                                 //store의 state 중에서 count의 state를 불러온다.

    const emplist11 = useCallback(()=>{
            dispatch({
                type:EMP_LIST_REQUEST, 
            })
    },[])

                                 
                                 
    return (
        <div>
            <button onClick={emplist11}>EMPLIST</button>
            {emplist.map((v,i)=>(
                <div key={i}>{v.EMPNO}</div>
            ))}
        </div>
    )

}

export default Emp;