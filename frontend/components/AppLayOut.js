
import {useCallback,useState,useEffect, useRef} from 'react'
import Link from 'next/link'
import {Row,Col} from  'antd'; 
import { Result, Icon, WhiteSpace } from 'antd-mobile';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'; 
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { LOAD_USER_REQUEST,
         LOGOUT_REQUEST,
} from '../reducers/auth';
import wrapper from '../store/configureStore';


const AppLayOut = ({children}) =>{
    const dummyList = ['카테코리01','카테코리02','카테코리03','카테코리04','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05']; 
   
    const dispatch = useDispatch(); 
    const {userInfo, joined} = useSelector((state)=>state.auth); 

    useEffect(()=>{
        dispatch({
            type:LOAD_USER_REQUEST, 
        }); 

        //로그 아웃 후 메인 페이지로 이동
        if(!userInfo){
            Router.push('/'); 

        }
    },[userInfo])


    const logOut = useCallback((e)=>{

        dispatch({
            type:LOGOUT_REQUEST, 
        });

    },[userInfo]); 

    const [isClicked,setIsClicked] = useState(false); 
    const inputEl = useRef(null); 
    

    const catergoriList = () =>{
          setIsClicked(!isClicked);
    }

    const closeCatergoriList = () =>{
        setIsClicked(false);
    }

    //https://velog.io/@janghyoin/Jobshopper-project-NextJS%EC%97%90%EC%84%9C-styled-components-%EC%82%AC%EC%9A%A9-hwjzs423yw
    return(

            <Row>
                <Col xs={24}> 

                <ul className="navul">
                    <li className="navli" onClick={catergoriList}>메뉴</li>
                    <li className="navli"><Link href={'/'} ><a>Home</a></Link></li>
                    <li className="navli"><Link href={'/about'} ><a>About</a></Link></li>
                    <li className="navli"><Link href={'/count'} ><a>Count</a></Link></li>
                    <li className="navli"><Link href={'/emp'} ><a>emp</a></Link></li>                   
                    {!userInfo && <li className="navli"><Link href={'/join'} ><a>회원가입</a></Link></li> }
                    {!userInfo && <li className="navli"><Link href={'/login'} ><a>로그인</a></Link></li>  }
                    {userInfo &&  <li className="navli"><Link href={'/userInfo'} ><a>회원정보</a></Link></li> }
                    {userInfo &&  <li className="navli" onClick={logOut}>로그아웃</li> }
                </ul>
                
            <div className="sidenav" style={{width : isClicked? "40%":"0"}}>
               <a className="closebtn" onClick={closeCatergoriList}>x</a>
               {dummyList.map((v,i)=>(
                   
               <Link href={'/about'} key={i}>
                    <a onClick={closeCatergoriList} >{v}</a>
                </Link>

               ))}
            </div>
                 {children}
                </Col>
            </Row> 


        ); 

}

AppLayOut.propTypes = {
    children : PropTypes.node,
}
export default AppLayOut; 