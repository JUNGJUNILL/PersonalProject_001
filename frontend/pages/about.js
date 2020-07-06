
import React , {useState,useEffect,useCallback}from 'react'
import styled from 'styled-components'; 
import { useRouter } from 'next/router';
import Link from 'next/link'
const About = ()=>{

  useEffect(()=>{
    console.log('dispatch 후에 데이터 가져오는 로직'); 
  },[])


  const dummyList = ['헬로우월드01','헬로우월드02','헬로우월드03','헬로우월드04','헬로우월드05','헬로우월드06']; 

  
   return (
    <>
       <div className='divTable' style={{marginTop:'3%'}}>
        <div className='divTableBody'>
      {dummyList.map((v,i)=>(

               <div className='divTableRow'  >
                <div className='divTableCell1' ><img src='https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg' style={{width:'80px',height:'80px'}}/></div>
                <div className='divTableCell' >{v}</div>
              </div>
          ))}
          </div>
        </div>
    </>
    );
}; 


export default About; 