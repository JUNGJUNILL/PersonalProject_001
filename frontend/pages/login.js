
import {useCallback,useState,useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KakaoLogin from "react-kakao-login";
import Link from 'next/link'
import Router from 'next/router'; 
import 
    {LOAD_LOGIN_REQUEST,
     LOGIN_REQUEST, 
    } 
from '../reducers/auth'; 
import { useRouter } from 'next/router';
import {Button} from 'antd'

const Login = ()=>{

    const dispatch = useDispatch(); 
    const router   =useRouter(); 
    const {isLogining, userInfo} = useSelector(state => state.auth); 


    const [id,setId] = useState(''); 
    const [password, setPassword] = useState('');

   
    useEffect(()=>{
        Kakao.init('71a70e1c6ee55af30c3f9ec51fd7dcb7'); 
    },[]); 

    //일반 로그인, 
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({type:LOGIN_REQUEST,
                  data: {
                    userId:id,  
                    password:password, 
                    loginType:'local', 
                  }
        }); 

        router.push({pathname:'/'});

    },[id,password]); 



    const onChangeId = useCallback((e)=>{
        setId(e.target.value); 
    },[id])


    const onChangPassword = useCallback((e)=>{
        setPassword(e.target.value); 
    },[password])

    const success01 =()=>{
        alert('성공'); 
        dispatch({type:LOGIN_REQUEST,
            data: {

              loginType:'kakao', 
            }
         }); 
    }

    const Failure01 = ()=>{
        alert('실패'); 
    }



    //시도 01
    function kakaoLoginPopup(){
        Kakao.Auth.login({
            scope:'profile, ', 
            success: function(authObj){
                    console.log('authObj==>' , authObj); 
                    Kakao.API.request({
                        url:'/v2/user/me', 
                        success: res =>{
                            const kakao_account = res.kakao_account
                            console.log('authObj=>' , kakao_account); 
                        }
                    })
                }
            })
    }

    function kakaoLogin(){

        dispatch({type:LOGIN_REQUEST,
            data: {

              loginType:'sdk', 
            }
         }); 
 // router.push({pathname:'/'});
    }


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
            {/*loading={isLogining}> */}
            <Button onClick={onSubmit}>로그인</Button>
            <Button onClick={kakaoLogin}>카카오 로그인 리디렉트</Button>
            <Button onClick={kakaoLoginPopup}>카카오 로그인 팝업</Button>

   
            <Link href={{path:'http://captainryan.gonetis.com:3095/api/auth/kakao'}}><a>카카오 로그인</a></Link>
        
        
        </form>
        </>
    )

}

export default Login; 