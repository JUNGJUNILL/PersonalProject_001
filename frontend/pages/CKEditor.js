import { useState, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {Button, Input, Alert} from 'antd'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import 
    {EMP_INSERT_REQUEST, 
     UPLOAD_IMAGES_REQUEST,
    } 
from '../reducers/emp'; 


const Editor = ()=>{

    const dispatch = useDispatch(); 
    const {imagePaths} = useSelector((state)=>state.emp); 
    const [content,setContent] = useState('');   
    const imageInput = useRef(); 

    const abc = ()=>{
        console.log('content=>' , content); 
        alert(content); 
    }

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
        imageInput.current.click(); 

    },[imageInput.current]); 


    return(

        
        <div className="demo-editor">
        <h2>게시글을 작성해 보세요!</h2>
        {/*
        <input type="file" multiple ref={imageInput} onChange={onChangeImages} hidden />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        */}
        <CKEditor
            editor={ ClassicEditor }
            config={{
             
                ckfinder:{
                     uploadUrl:'http://localhost:3095/api/emp/ckeditor',
        
                    //  headers:{
                    //     "X-CSRF-TOKEN": "CSFR-Token",
                    //     "Access-Control-Allow-Origin":"*", 
                    // }
                    
                },
                toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList','imageUpload'],
                placeholder: "글을 입력해보세요!",
            

            }}


            //data="<p>Hello from CKEditor 5!</p>"
            //최소 실행시 보여줄 문구 

            onInit={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setContent(data); 
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
        <Button onClick={abc}>벗은</Button>
        </div>
       

    )

} 


export default Editor; 