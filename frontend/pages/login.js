
import {useCallback,useState,useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 
    {LOAD_LOGIN_REQUEST,
     LOGIN_REQUEST, 
    } 
from '../reducers/auth'; 
import {Button} from 'antd'

const Login = ()=>{

    const dispatch = useDispatch(); 
    const {isLogining, userInfo} = useSelector(state => state.auth); 


    const [id,setId] = useState(''); 
    const [password, setPassword] = useState('');

    useEffect(()=>{
        dispatch({
            type:LOAD_LOGIN_REQUEST, 
        }); 
    },[]); 

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({type:LOGIN_REQUEST,
                  data: {
                    userId:id,  
                    password:password, 
                  }
        }); 

    },[id,password]); 


    const onChangeId = useCallback((e)=>{
        setId(e.target.value); 
    },[id])


    const onChangPassword = useCallback((e)=>{
        setPassword(e.target.value); 
    },[password])




    return (
        <>
        <form onSubmit={onSubmit}>
            <div className='divTable' style={{marginTop:'3%'}} >
                <div className='divTableBody'>
                    <div className='divTableRow'>
                            <div className='divTableCell'>아이디:</div>
                            <input type="text" name="userId" value={id} onChange={onChangeId}/>
                    </div>
                    <div className='divTableRow'>
                            <div className='divTableCell'>비밀번호:</div>
                            <input type="password" name="password" value={password} onChange={onChangPassword} />
                    </div>
                </div>
            </div>
            <Button onClick={onSubmit} loading={isLogining}>로그인</Button>
        </form>
        </>
    )

}

export default Login; 