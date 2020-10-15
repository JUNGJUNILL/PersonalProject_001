import React, { useCallback,useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import 
    {MAINPOSTS_1001_DETAIL_INFO_REQUEST,} 
from '../reducers/mainPosts_1001'; 

import {DislikeTwoTone,LikeTwoTone ,EyeOutlined, UserOutlined, FieldTimeOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import custumDateFormat from  '../utilComponent/custumDateFormat';



const detailPage  = ({nickName,postFlag,postId}) =>{

  const dispatch = useDispatch(); 

  const {mainPosts_1001Info} = useSelector((state)=>state.mainPosts_1001); 

  const array = [{commentId:'C1000001',postFlag:'1001',postId:'10000013',content:'와우01',createdDate:'20200921',good:'11',bad:'1'},
                {commentId:'C1000002',postFlag:'1001',postId:'10000013',content:'와우02',createdDate:'20200922',good:'12',bad:'2'},
                {commentId:'C1000003',postFlag:'1001',postId:'10000013',content:'와우03',createdDate:'20200923',good:'13',bad:'3'},
                {commentId:'C1000004',postFlag:'1001',postId:'10000013',content:'와우04',createdDate:'20200924',good:'14',bad:'4'},
                {commentId:'C1000005',postFlag:'1001',postId:'10000013',content:'와우05',createdDate:'20200925',good:'15',bad:'5'},
                ]

   useEffect(()=>{
  
    
    dispatch({
          type:MAINPOSTS_1001_DETAIL_INFO_REQUEST, 
          data:{
            postId,
            nickName,
            postFlag,
        
          }
    })
  

  
  },[]); 

    return (
    <>
    {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}
      <div className='divTable' style={{marginTop:'3%'}}>
            <div className='divTableRowTh'>
                <div className='divTableCellTh'>{mainPosts_1001Info[0].title} [{Array}]</div>
           </div>
           <div className='divTableRow'>
                <div className='divTableCell'>
                  <UserOutlined />  {mainPosts_1001Info[0].userNickName}<br />
                  <FieldTimeOutlined />  {custumDateFormat(mainPosts_1001Info[0].createdDate)}<br />
                  <LikeTwoTone twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].good} <DislikeTwoTone twoToneColor="#1ba640"/> : {mainPosts_1001Info[0].bad} 
                </div>
           </div>
      </div>
      <div style={{width:"100%",height:"auto", border:"1px solid", borderColor:"#8cc49c",marginTop:"1%"}}>
         광고입니다.
      </div>
    {/*상세 페이지 타이틀--------------------------------------------------------------------------------*/}


    {/*상세 페이지 컨텐츠--------------------------------------------------------------------------------*/}
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1%"}}>
        <div dangerouslySetInnerHTML={{__html:mainPosts_1001Info[0].content}}/>
     </div> 
    {/*상세 페이지 컨텐츠--------------------------------------------------------------------------------*/}   
    
    <div style={{width:"100%",height:"auto", border:"1px solid", borderColor:"#8cc49c",marginTop:"1%"}}>
      광고입니다.
    </div>

    <div className='divTable'>
      <div className='divTableRowTh' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button><LikeTwoTone twoToneColor="#1ba640"/></Button>&nbsp;&nbsp;<Button><DislikeTwoTone twoToneColor="#1ba640"/></Button>
      </div>
    </div>


    </>
        )
}


detailPage.getInitialProps = async (context) =>{

  const postId   = context.query.postId; 
  const nickName = context.query.nickName; 
  const postFlag = context.query.postFlag; 
  return {nickName,postFlag,postId}; 
}
export default detailPage; 