
import React , {useState,useEffect,useCallback}from 'react'
import Router ,{ useRouter } from 'next/router';
import Link from 'next/link'
import Pagenation from '../utilComponent/Pagenation'
import {DislikeTwoTone,LikeTwoTone ,EyeOutlined, UserOutlined, FieldTimeOutlined, FolderTwoTone} from '@ant-design/icons'
import 
    {MAINPOSTS_1001_LIST_REQUEST,} 
from '../reducers/mainPosts_1001'; 


import 
    {LOAD_USER_REQUEST,
    } 
from '../reducers/auth'; 
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from '../utilComponent/isEmpty';
import custumDateFormat from  '../utilComponent/custumDateFormat';




const mainPosts_1001 = ({pages,group})=>{

  const dispatch = useDispatch(); 
  const router   = useRouter(); 
  const {mainPosts_1001,pppp} = useSelector((state)=>state.mainPosts_1001); 


  /*-------------------------------------------페이징 처리 로직 start-------------------------------------------------------*/
  const [nowPage,setNowPage] = useState(0);                       //현재 페이지
  const [postsPerPage] = useState(2);                             //한 페이지당 list 수 
  const [groupPage , setGroupPage] = useState(5);                 //페이징 그룹 당 수  1~5 , 6~10 , 11~15 ...
  const [nowGroupPageArray,setNowGroupPageArray] =useState([]);   //현제 페이징 그룹 배열
  const [page,setPage] = useState(0); 

  const pagenate =useCallback((pageNumber, groupPageArray)=>{
    console.log('pageNumber=>' , pageNumber , '  groupPageArray=>', groupPageArray); 
    setNowPage(pageNumber); 
    nowGroupPageArray.length=0; 
    setNowGroupPageArray(nowGroupPageArray.concat(groupPageArray));
    console.log('nowGroupPageArray ==>',nowGroupPageArray); 
    const indexOfLastPost = pageNumber * postsPerPage;   
    const indexOfFirstPost = indexOfLastPost - postsPerPage;  

     dispatch({
        type:MAINPOSTS_1001_LIST_REQUEST, 
        data:{postFlag:'1001',
              currentPage:indexOfFirstPost,
              maxPage:postsPerPage
       }, 
    });

   

},[nowPage,nowGroupPageArray]); 
/*-------------------------------------------페이징 처리 로직   end-------------------------------------------------------*/

  useEffect(()=>{
      //상세 정보 본 후 뒤로 가기 눌렀을 경우 
      //페이지 이동후 뒤로가기 눌렀을 경우 
      //페이지 첫 로드시.. 
        // if(!pages){
        //   console.log('useEffect' , pages); 
        //   dispatch({
        //     type:MAINPOSTS_1001_LIST_REQUEST, 
        //     data:{postFlag:'1001',
        //           currentPage:nowPage,
        //           maxPage:postsPerPage
        //         }, 
        //   }); 
        // }else{

        // }
          console.log('pages exists!  ' ,pages );
          setPage(pages);

          let pageArray = [0,1,2,3,4];

          if(pages ==='6'){
            pageArray.length=0; 
            pageArray=[5,6,7,8,9]

          }

          //앞으로 그룹이동 
          // if(pages === pageArray[pageArray.length]+1){
          //   pageArray.length=0; 
          //     for(let i=pageArray[pageArray.length]+1; i<groupPage; i++){
          //       pageArray.push(i); 
          //     }
          // }    
          pagenate(parseInt(pages),pageArray);
      



  },[pages]); 

  
  const abc = ()=>{
    if(pages){
      pagenate(pages,[0,1,2]);
    }else{
      pagenate(2,[0,1,2]); 
    }
   
  }
  const gotoDetail = useCallback((postId,userNickName,postFlag)=>{
    router.push({pathname:'/detailPage',
                 query:{postId,nickName:userNickName,postFlag},
              }); 
  },[])

   return (
    <div>
    <input type="button"  value="hello" onClick={abc}></input>
    <Link href={{query:{nowPage:2}}} onClick={abc}><a>abc</a></Link>
      <div className="divTable">
            {mainPosts_1001.map((v,i)=>(
               <div className='divTableRow' onClick={()=>gotoDetail(v.postId,v.userNickName,'1001',nowPage)}>
                  <div className='divTableCell'><div className="divImageCell"><img src='https://dimg.donga.com/wps/NEWS/IMAGE/2019/11/24/98510015.1.jpg' /></div></div>
                  <div className="divTableCell" ><Link href={{pathname:'/detailPage' , query:{postId:v.postId,nickName:v.userNickName,postFlag:'1001'}}} ><a>{isEmpty(v.title)}</a></Link><br/>
                  <LikeTwoTone twoToneColor="#1ba640"/> : {v.good} <DislikeTwoTone twoToneColor="#1ba640"/> : {v.bad}  <EyeOutlined color="red"/> : {v.hit}<br/>
                  <UserOutlined /> {isEmpty(v.userNickName)}   <FieldTimeOutlined /> {custumDateFormat(v.createdDate)}<br />
                  </div>
              </div>
            ))}
      </div>
    
          <input type="button" value="뒤로가기" onClick={()=>router.back()}/>
        <Pagenation pagenate={pagenate} dataLength={mainPosts_1001.length} postsPerPage={postsPerPage} nowPage={nowPage} groupPage={groupPage} groupPageArray={nowGroupPageArray} pages={page}/>

    </div>
    );
}; 11

mainPosts_1001.getInitialProps = async (context) =>{

  const pages = context.query.nowPage; 
  const group = context.query.group;


  // if(pages){
  //    console.log('getInitialProps pages ==>', pages);
  //   context.store.dispatch({
  //     type:MAINPOSTS_1001_LIST_REQUEST, 
  //     data:{postFlag:'1001',
  //           currentPage: (pages*2)-2,
  //           maxPage:2
  //         }, 
  //   })
  // }

  return {pages,group}; 

}

export default mainPosts_1001; 