
import React , {useState,useEffect,useCallback}from 'react'
import styled from 'styled-components'; 
import { useRouter } from 'next/router';
import Link from 'next/link'
import Pagenation from '../utilComponent/Pagenation'
const About = ()=>{

  useEffect(()=>{
    console.log('dispatch 후에 데이터 가져오는 로직'); 
  },[])

  const [nowPage,setNowPage] = useState(0);                       //현재 페이지
  const [postsPerPage] = useState(5);                             //한 페이지당 list 수 
  const [groupPage , setGroupPage] = useState(5);                 //페이징 그룹 당 수  1~5 , 6~10 , 11~15 ...
  const [nowGroupPageArray,setNowGroupPageArray] =useState([]);   //현제 페이징 그룹 배열

  const pagenate =useCallback((pageNumber, groupPageArray)=>{
    setNowPage(pageNumber); 
    nowGroupPageArray.length=0; 
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    const indexOfLastPost = pageNumber * postsPerPage;   
    const indexOfFirstPost = indexOfLastPost - postsPerPage;  


},[nowPage,nowGroupPageArray]); 


  const dummyList = ['헬로우월드01','헬로우월드02','헬로우월드03','헬로우월드04','헬로우월드05','헬로우월드06']; 

  
   return (
    <>
        <div className='divTable' style={{marginTop:'3%'}}>
           <div className='divTableBody'>
           <div className='divTableRowTh'>
                     <div className='divTableCellTh'>이미지</div>
                     <div className='divTableCellTh'>제목</div>
                     <div className='divTableCellTh'>작성자</div>
                     <div className='divTableCellTh'>등록일</div>
                     <div className='divTableCellTh'>조회</div>
                     <div className='divTableCellTh'>추천</div>
                     <div className='divTableCellTh'>반대</div>
           </div>
           <br/>
      {dummyList.map((v,i)=>(
               <div className='divTableRow'  >
                <div className='divTableCell' style={{width:'80px',height:'80px'}}><img src='https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg' style={{width:'80px',height:'80px'}}/></div>
                <div className='divTableCell' ><Link href={{pathname:'/detailPage' , query:{postId:'1001',nick:'abc',flag:'2222'}}} as={'detailPage'}><a>{v}</a></Link></div>
                <div className='divTableCell' >{'운영자'}</div>
                <div className='divTableCell' >{'20200818 : 14:30'}</div>
                <div className='divTableCell' >{'125'}</div>
                <div className='divTableCell' >{'10'}</div>
                <div className='divTableCell' >{'0'}</div>
              </div>
          ))}
          </div>
        </div>
        <Pagenation pagenate={pagenate} dataLength={dummyList.length} postsPerPage={postsPerPage} nowPage={nowPage} groupPage={groupPage} groupPageArray={nowGroupPageArray} />

    </>
    );
}; 


export default About; 