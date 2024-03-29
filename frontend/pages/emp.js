import React, { useCallback,useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagenation from '../utilComponent/Pagenation'
import Router from 'next/router'; 
import {Button} from 'antd'

import 
    {EMP_LIST_REQUEST,} 
from '../reducers/emp'; 


import 
    {LOAD_USER_REQUEST,
    } 
from '../reducers/auth'; 

const Emp = () =>{


    const dispatch = useDispatch(); 
    const {userInfo, joined} = useSelector((state)=>state.auth);
    const {emplist}    = useSelector(state => state.emp); 
                                 //store의 state를 불러오는 hook 
                                 //store의 state 중에서 count의 state를 불러온다.

    const [nowPage,setNowPage] = useState(0);                       //현재 페이지
    const [postsPerPage] = useState(5);                             //한 페이지당 list 수 
    const [groupPage , setGroupPage] = useState(5);                 //페이징 그룹 당 수  1~5 , 6~10 , 11~15 ...
    const [nowGroupPageArray,setNowGroupPageArray] =useState([]);  //현제 페이징 그룹 배열

    const getEmplist = useCallback(()=>{
          
    },[])

    const gotoEdit = useCallback(()=>{

            Router.push('/CKEditor'); 
    },[]); 



    useEffect(()=>{

        dispatch({
            type:EMP_LIST_REQUEST, 
            data:{name:'',
                  job:'',
                  currentPage:nowPage,
                  maxPage:postsPerPage
                 }, 
        })


        dispatch({
            type:LOAD_USER_REQUEST,
        }); 
      },[]); 


     // const currentPosts = emplist.slice(indexOfFirstPost,indexOfLastPost); //0~5
      /*
      1 페이지 = 1*5 =5 
                5-5 =0 
                0~5 
      2 페이지 = 2*5=10 
                10-5=5 
                5~10
      3 페이지 = 3*5=15 
      */
    

      const pagenate =useCallback((pageNumber, groupPageArray)=>{
          setNowPage(pageNumber); 
          nowGroupPageArray.length=0; 
          setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
          const indexOfLastPost = pageNumber * postsPerPage;   
          const indexOfFirstPost = indexOfLastPost - postsPerPage;  

        dispatch({
          type:EMP_LIST_REQUEST, 
          data:{name:'',
                job:'',
                currentPage:indexOfFirstPost,
                maxPage:postsPerPage
               }, 
      });


      },[nowPage,nowGroupPageArray]); 
                                 
                              
    return (
        <>
        {userInfo && <p>로그인됨</p>}
        {!userInfo && <p>로그인안됨</p>}

        
         <div className='divTable' style={{marginTop:'3%'}}>
           <div className='divTableBody'>
           <div className='divTableRow'>
                     <div className='divTableCell'>사원번호</div>
                     <div className='divTableCell'>사원명</div>
                     <div className='divTableCell'>직책</div>
                     <div className='divTableCell'>매니져번호</div>
                     <div className='divTableCell'>입사일</div>
                     <div className='divTableCell'>급여</div>
                     <div className='divTableCell'>인센</div>
                     <div className='divTableCell'>부서번호</div>
           </div>
            {emplist && emplist.map((v,i)=>(
                <div className='divTableRow' key={i}>
                     <div className='divTableCell'>{v.EMPNO}</div>
                     <div className='divTableCell'>{v.ENAME}</div>
                     <div className='divTableCell'>{v.JOB}</div>
                     <div className='divTableCell'>{v.MGR}</div>
                     <div className='divTableCell'>{v.HIREDATE}</div>
                     <div className='divTableCell'>{v.SAL}</div>
                     <div className='divTableCell'>{v.COMM}</div>
                     <div className='divTableCell'>{v.DEPTNO}</div>
                </div>
            ))}
            </div>
         </div>
        <Pagenation pagenate={pagenate} dataLength={emplist.length} postsPerPage={postsPerPage} nowPage={nowPage} groupPage={groupPage} groupPageArray={nowGroupPageArray} />
        <Button onClick={gotoEdit}>글쓰기</Button>
        </>
    )

}

export default Emp;