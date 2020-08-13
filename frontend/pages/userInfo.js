import {useCallback,useState,useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'; 
import 
    {LOAD_LOGIN_REQUEST,
     LOGIN_REQUEST, 
    } 
from '../reducers/auth'; 
import {Button} from 'antd'

const userInfo = ()=>{

    return (
            <div>유저정보입니다.</div>
    )

}

export default userInfo; 