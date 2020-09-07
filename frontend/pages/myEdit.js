import {Editor} from 'react-draft-wysiwyg'
import { EditorState,convertToRaw } from 'draft-js';
import { useState, useCallback, useRef } from 'react';
import {Button, Input, Alert} from 'antd'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { useDispatch, useSelector } from 'react-redux';
import 
    {EMP_INSERT_REQUEST, 
     UPLOAD_IMAGES_REQUEST,
    } 
from '../reducers/emp'; 



const Myeditor = () =>{

    const dispatch = useDispatch(); 
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [content , setContent] = useState(''); 
    const [mainPostTitle , setMainPostTitle] = useState(''); 
    const {userInfo} = useSelector((state)=>state.auth);
    const {imagePaths} = useSelector((state)=>state.emp); 
    
    const imageInput = useRef(); 

    //제출
    const editContent = useCallback(()=>{

        if(!mainPostTitle || !mainPostTitle.trim()){
            alert('제목을 입력해 주세요.'); 
            return; 
        }

        if(!content || !content.trim()){
            alert('게시글을 입력 해 주세요.'); 
            return; 
        }

        dispatch({  
            type:EMP_INSERT_REQUEST, 
            data:{
                content : content, 
                title   : mainPostTitle, 
                nickName : userInfo, 
            }
            
        });

    },[content]); 


    //게시글 제목 입력 
    const mainPostTitleChange = useCallback((e)=>{

        setMainPostTitle(e.target.value); 

    },[mainPostTitle])



    //이미지 업로드 창 
    const onChangeImages = useCallback((e)=>{
        
        const imageFormData = new FormData(); 
        Array.prototype.forEach.call(e.target.files ,(f)=>{
            imageFormData.append('image',f); 
        });
        
        dispatch({
                type:UPLOAD_IMAGES_REQUEST,
                data:imageFormData,             
        }); 

    },[]); 



    //이미지 업로드 클릭 
    const onClickImageUpload = useCallback(() =>{
        alert("??"); 
        imageInput.current.click(); 

    },[imageInput.current]); 


    //이미지 본문 삽입 
    const insertContent = useCallback(()=>{
        let b = ""; 
       b =  content.concat(`<img src="http://localhost:3095/pictureTest1598882059100.jpg" alt="undefined" style="height: auto;width: auto"/>`)
       onEditorStateChange(b); 
    },[content]); 




   //본문 입력
   const onEditorStateChange = useCallback((editState)=>{
       console.log(draftToHtml(convertToRaw(editorState.getCurrentContent()))); 
    setEditorState(editState);  
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))); 

   },[editorState]);

    return (    
    <>
    <div>
    {imagePaths && imagePaths.map((v,i)=>{
        return (

            <div key={v} >
             <img src={`http://localhost:3095/${v}`} style={{width:'20%',height:'20%' }} alt={v} />
             <button onClick={insertContent}>본문삽입</button>
            </div>
        )
    })}
    </div>
         <input type="file" multiple ref={imageInput} onChange={onChangeImages} hidden />
         <Button onClick={onClickImageUpload}>이미지 업로드</Button>
         <Input name="mainPostTitle" value={mainPostTitle} onChange={mainPostTitleChange} placeholder="제목을 입력 해 주세요." size="25"/>
         <Editor
            editState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
           localization={{
               locale:'ko', 
           }}
           toolbar={{
            image: { uploadCallback: onClickImageUpload, 
                     alt: { present: true, mandatory: true },
                     inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                    
                   },
          }}
      
    

           onEditorStateChange={onEditorStateChange}
           
            />
            <Button onClick={editContent}>작성</Button>

    </>
        )
}

export default Myeditor; 