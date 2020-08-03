import React,{useState,useCallback,useEffect} from 'react'
import { number } from 'prop-types';
import Link from 'next/link'

const Pagenation = ({pagenate,dataLength,postsPerPage,nowPage,groupPage,groupPageArray}) =>{

    const  pageNumers= []; 

    //마지막 페이지 처리 
    let  isInVisible = false; 
    if(dataLength === 0 || dataLength < postsPerPage){
        isInVisible = true; 
    }

    if(nowPage===0){ //첫 로드시    
            for(let i=0; i<groupPage; i++){
           
                pageNumers.push(i); 
            }
    
    //앞으로 그룹 이동
    }else if(((nowPage % groupPage ===1)) && (nowPage !== 1)){
            console.log('앞으로 그룹 이동')
            pageNumers.length = 0; 
            for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
            pageNumers.push(i); 
            }

    //뒤로 그룹 이동
    }else if((groupPageArray[0] === nowPage)){
             console.log('뒤로 그룹 이동');
             pageNumers.length = 0; 
             for(let i=0; i<groupPageArray.length; i++){
                pageNumers.push(groupPageArray[i]-groupPage); 
             }

    }else{
           console.log('번호 클릭'); 
           pageNumers.length=0; 
           for(let i=0; i< groupPageArray.length; i++){
               pageNumers.push(groupPageArray[i]); 
           }

    }

    return(
        <>  
            <div className="paginationDiv" style={{marginTop:"1%"}}>
                <ul className="pagination">
                    <li  style={{display: nowPage === 1 || nowPage === 0  ? "none" : ""}}><Link href={'#'}><a onClick={()=>pagenate(nowPage-1,pageNumers)}>◀</a></Link></li>
                    {pageNumers.map((v,i,array)=>(
                        <li key={v}   style={{display : (isInVisible===true) && (v >=nowPage) ? "none" : "" }}>
                            <li><Link href={'#'}><a className={nowPage === v+1 ?  "active" : ""} onClick={()=>pagenate(v+1,array)}>{v+1}</a></Link></li>
                        </li>
                    ))}
                    <li style={{display :isInVisible===true ? "none" : ""}}><Link href={'#'}><a onClick={()=>pagenate(nowPage+1,pageNumers)}>▶</a></Link></li>
                </ul>     
            </div>        
        </>
    )

}

export default Pagenation; 