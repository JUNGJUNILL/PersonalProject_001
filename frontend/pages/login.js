
import {useCallback,useState,useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 
    {LOAD_LOGIN_REQUEST,} 
from '../reducers/auth'; 

const Login = ()=>{

    const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch({
            type:LOAD_LOGIN_REQUEST, 
        }); 
    })


    return (
        <div>로그인 화면</div>
    )

}

export default Login; 