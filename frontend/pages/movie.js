import React, { memo,useState,useEffect,useRef } from "react";
import MovieName from '../components/testComponent/movieComponent'

const Movie = () =>{
const [count,setCount] = useState(0); 
const [name, setName] = useState("헬로우"); 
console.log('Movie'); 
return (

    
    <div>
 
    {count}
    <input type="button" value='clickc' onClick={()=>setCount(count+1)} /> 
    <MovieName />
     
    </div>
)
}
export default Movie; 

