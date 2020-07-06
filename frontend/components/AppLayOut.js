
import {useCallback,useState,useEffect, useRef} from 'react'
import Link from 'next/link'
import {Row,Col} from  'antd'; 
import { Result, Icon, WhiteSpace } from 'antd-mobile';
import styled from 'styled-components';
import PropTypes from 'prop-types'


const AppLayOut = ({children}) =>{
    const dummyList = ['카테코리01','카테코리02','카테코리03','카테코리04','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05','카테코리05']; 

    const [isClicked,setIsClicked] = useState(false); 
    const inputEl = useRef(null); 
    const colorFilledBtn = useCallback(()=>{


        alert(test); 

    },[])

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
                <ul>
                    <li onClick={catergoriList}>메뉴</li>
                    <li><Link href={'/'} ><a>Home</a></Link></li>
                    <li><Link href={'/about'} ><a>About</a></Link></li>
                    <li><Link href={'/count'} ><a>Count</a></Link></li>
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