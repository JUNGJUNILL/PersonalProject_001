import React, { useCallback,useEffect, useState, createRef, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import custumDateFormat from  '../../utilComponent/custumDateFormat';
import {DislikeTwoTone,LikeTwoTone} from '@ant-design/icons'
import 
    {
     MAINPOSTS_1001_COMMENTS_REQUEST, 
     MAINPOSTS_1001_COMMENTLIKE_REQUEST,
    } 
from '../../reducers/mainPosts_1001'; 
import { Badge } from 'antd';

const Comments1001 = ({
                      key,
                      postFlag,
                      nickName,
                      postId,
                      userInfo,

                      commentId,
                      comment,
                      who,
                      flag,
                      
                      good,
                      bad,
                      createdDate,

                      likeBtn,

                      clickedComponent,
                      likeDislikeflag

                    })=>{

    const gggg = ()=>{
        alert(clickedComponent);
        return; 
    }


    console.log('clickedComponent=>' ,clickedComponent , 'likeDislikeflag=>', likeDislikeflag); 

    return (
                <div  className='divTableRow' >
                    <div  className="divTableCell">
                    <b>{who}</b> &nbsp; <small>{custumDateFormat(createdDate)}</small><br/>
                    {comment}<br />
                    답글 [9] {commentId} <input type="button" value="ttt" onClick={gggg}/>
               
                        <div  style={{marginTop:"1%",display:"block",float:"right"}}>
                            <LikeTwoTone onClick={()=>likeBtn(commentId,flag,'good')} twoToneColor={clickedComponent && likeDislikeflag==='good' ? "#ff0000" : "#1ba640"}/>{clickedComponent && likeDislikeflag==='good' ? parseInt(good)+1:good}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <DislikeTwoTone onClick={()=>likeBtn(commentId,flag,'bad')} twoToneColor={clickedComponent && likeDislikeflag==='bad' ? "#ff0000" : "#1ba640"} />{clickedComponent && likeDislikeflag==='bad' ? parseInt(bad)+1:bad}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                        </div> 
                    </div>
                </div>


                
    )

}

export default React.memo(Comments1001); 