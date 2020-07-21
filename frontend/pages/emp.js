import React, { useCallback,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import 
    {EMP_LIST_REQUEST,} 
from '../reducers/emp'; 


const Emp = () =>{


    const dispatch = useDispatch(); 
    const {emplist}    = useSelector(state => state.emp); 
                                 //store의 state를 불러오는 hook 
                                 //store의 state 중에서 count의 state를 불러온다.

    const getEmplist = useCallback(()=>{
          
    },[])

    useEffect(()=>{
        dispatch({
            type:EMP_LIST_REQUEST, 
            data:{name:'',job:'',currentPage:1,maxPage:4}, 
        })
      },[])
    
                                 
                          //        <button onClick={getEmplist}>검색</button>       
    return (
        <>
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
            {emplist.map((v,i)=>(
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
         <div>
         <Pagination defaultCurrent={1} total={50} />
         </div>
        </>
    )

}

export default Emp;