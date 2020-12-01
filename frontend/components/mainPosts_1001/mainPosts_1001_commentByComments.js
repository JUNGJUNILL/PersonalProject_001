import React, { useCallback,useEffect, useState, createRef, memo } from 'react'

import custumDateFormat from  '../../utilComponent/custumDateFormat';
import {DislikeTwoTone,LikeTwoTone , UserOutlined, FieldTimeOutlined} from '@ant-design/icons'

const Comment1001ByComments = ({
                                    key,
                                    postFlag,
                                    nickName,
                                    postId,
                                    userInfo,
                                    commentId,

                                    byCommentId,
                                    comment,
                                    who,

                                    good,
                                    bad,
                                    createdDate
                                })=>{
                                    console.log('대댓글');


    return (
        <div className='divTableRow' >
            <div className="divTableCell02">
                    └&nbsp;<b>{who}</b> &nbsp; <small>{custumDateFormat(createdDate)}</small><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;{comment}
                <div  style={{marginTop:"1%",display:"block",float:"right"}}>
                    <LikeTwoTone twoToneColor={"#1ba640"}/>{good}
                    &nbsp;&nbsp;&nbsp;
                    <DislikeTwoTone  twoToneColor={"#1ba640"} />{bad}
                    &nbsp;&nbsp;&nbsp;
                    <br />
                </div> 
            </div>
        </div>   
    )


}

export default React.memo(Comment1001ByComments); 