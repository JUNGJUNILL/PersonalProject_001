
import {useCallback,useState,useEffect, useRef} from 'react';


const Home = () =>{
  console.log('home'); 
  const test = ()=>{
    //alert("??"); 
    console.log("???"); 
  }
        return(
            <>

            <div className="divTable">
            <div className='divTableRow' onClick={test} > 
              <div className='divTableCell'><div className="divImageCell"><img style={{width:"100%",height:"auto"}} src='http://captainryan.gonetis.com:3095/bigsizepicture1600739089711.jpg' /></div></div>
              <div className="divTableCell" >
              <a>가라나라마바사아자차카타파하가라나라마바사</a><br/>
              g : 10 n : 10 hit : 15,000<br/>
              20200922 16:44 | 작성자 : 정준일<br />
              </div>
            </div>
            <div className='divTableRow' onClick={test} > 
            <div className='divTableCell'><div className="divImageCell"><img style={{width:"100%",height:"auto"}} src='https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg' /></div></div>
            <div className="divTableCell" >
            <a>가라나라마바사아자차카타파하</a><br/>
            g : 10 n : 10 hit : 15,000<br/>
            20200922 16:44 | 작성자 : 정준일<br />
            </div>
          </div>
          <div className='divTableRow' onClick={test} > 
          <div className='divTableCell'><div className="divImageCell"><img style={{width:"100%",height:"auto"}} src='https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg' /></div></div>
          <div className="divTableCell" >
          <a>가라나라마바사아자차카타파하</a><br/>
          g : 10 n : 10 hit : 15,000<br/>
          20200922 16:44 | 작성자 : 정준일<br />
          </div>
        </div>
            
            </div>



            </>

        );
}

export default Home; 