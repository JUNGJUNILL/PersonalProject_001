import {Editor} from 'react-draft-wysiwyg'
import { EditorState,convertToRaw } from 'draft-js';
import { useState, useCallback, useRef } from 'react';
import {Button} from 'antd'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { useDispatch, useSelector } from 'react-redux';
import 
    {EMP_INSERT_REQUEST,} 
from '../reducers/emp'; 



const Myeditor = () =>{

    const dispatch = useDispatch(); 
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    //<p></p>
    const [content , setContent] = useState(''); 
    const {userInfo} = useSelector((state)=>state.auth);
    const imageInput = useRef(); 

    //제출
    const editContent = useCallback(()=>{
        if(!content || !content.trim()){
            alert('게시글을 입력 해 주세요.'); 
            return; 
        }
        dispatch({  
            type:EMP_INSERT_REQUEST, 
            data:{
                content : content, 
                nickName : userInfo, 
            }
            
        });

    },[content]); 



    //이미지 업로드 클릭 
    const onClickImageUpload = useCallback(() =>{

        imageInput.current.click(); 
    },[imageInput.current])


    //이미지 업로드 창 
    const onChangeImages = useCallback((e)=>{
        
        const imageFormData = new FormData(); 
    
        [].forEach.call(e.target.files,(f)=>{
            imageFormData.append('image',f); 
        });


    },[]); 


   const onEditorStateChange = useCallback((editState)=>{

    setEditorState(editState); 
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))); 

   },[editorState]);

    return (    
    <>
        <input type="file" multiple ref={imageInput} onChange={onChangeImages} hidden />
         <Button onClick={onClickImageUpload}>이미지 업로드</Button>
         <Editor
            editState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
           localization={{
               locale:'ko', 
           }}
        
           onEditorStateChange={onEditorStateChange}
            />
            <Button onClick={editContent}>작성</Button>

    </>
        )
}

export default Myeditor; 