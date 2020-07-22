import React,{useState,useCallback,useEffect} from 'react'
import { number } from 'prop-types';
import Link from 'next/link'

const Pagenation = ({pagenate,dataLength,postsPerPage}) =>{

    const pageNumers = []; 

    if(dataLength !== 5){
        pageNumers.length=0; 
        for(let i=1; i<=postsPerPage; i++){
            pageNumers.push(i);
        }

    }else{
        pageNumers.length=0; 
        for(let i=1; i<=5; i++){
            pageNumers.push(i);
        }
    }


    return(
        <>  
        <nav>
            <ul>
                {pageNumers.map(v=>(
                    <li key={v}>
                         <li><Link href={'#'}><a onClick={()=>pagenate(v)}>{v}</a></Link></li>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )

}

export default Pagenation; 