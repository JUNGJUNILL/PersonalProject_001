import React,{useState,useCallback,useEffect} from 'react'
import { number } from 'prop-types';
import Link from 'next/link'

const Pagenation = ({pagenate,dataLength,postsPerPage,nowPage,groupPage,groupPageArray}) =>{

    const  pageNumers= []; 

    if(nowPage===0){ //첫 로드시    
            for(let i=0; i<groupPage; i++){
           
                pageNumers.push(i); 
            }
    
    //앞으로 그룹 이동
    }else if(((nowPage % groupPage ===1)) && (nowPage !== 1) ){

            pageNumers.length = 0; 
            for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
            pageNumers.push(i); 
            }

    //뒤로 그룹 이동
    }else if(groupPageArray[0] === nowPage){

             pageNumers.length = 0; 
             for(let i=0; i<groupPageArray.length; i++){
                pageNumers.push(groupPageArray[i]-groupPage); 
             }

    }else{

           pageNumers.length=0; 
           for(let i=0; i< groupPageArray.length; i++){
               pageNumers.push(groupPageArray[i]); 
           }

    }

    //마지막 페이지 처리
    if(dataLength === 0 || dataLength < postsPerPage){
        const groupPageArrayFirstValue = groupPageArray[0]; 
        
    }
    console.log('nowPage==>',nowPage, 'groupPageArray[0]', groupPageArray[0] ); 

        // for(let i=0; i<groupPage; i++){
           
        //     pageNumers.push(i); 

        //     if(((nowPage % groupPage ===1)) && (nowPage !== 1)){
        //         pageNumers.length = 0; 
        //         for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
        //         pageNumers.push(i); 
        //         }
        //     }
        // }

  

        // if((nowPage % groupPage ===1) && (nowPage !== 1)){
        //     pageNumers.length = 0; 
        //     for(let i=nowPage-1; i<(nowPage-1)+groupPage; i++ ){
        //     pageNumers.push(i); 
        //     }
        // }


    return(
        <>  
        <nav>
            <ul>
                {nowPage}
                <li style={{display: nowPage === 1 || nowPage === 0  ? "none" : ""}}><Link href={'#'}><a onClick={()=>pagenate(nowPage-1,pageNumers,'minus')}>◀</a></Link></li>
               
               
                {pageNumers.map((v,i,array)=>(
                    <li key={v}>
                         <li><Link href={'#'}><a onClick={()=>pagenate(v+1,array)}>{v+1}</a></Link></li>
                    </li>
                ))}



          <li><Link href={'#'}><a onClick={()=>pagenate(nowPage+1,pageNumers)}>▶</a></Link></li>
            </ul>               
        </nav>
        </>
    )

}

export default Pagenation; 