import {Editor} from 'react-draft-wysiwyg'
import { EditorState,convertToRaw } from 'draft-js';
import { useState, useCallback } from 'react';
import {Button} from 'antd'

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';



const Myeditor = () =>{


    const editContent = useCallback(()=>{
        console.log('끼잉끼잉==>' , content); 
    },[]); 

    // const [editorState, setEditorState] = useState(
    //     () => EditorState.createEmpty(),
    //   );

        const [editorState, setEditorState] = useState(EditorState.createEmpty());
        const [content , setContent] = useState(''); 

   const onEditorStateChange = useCallback((editState)=>{

    setEditorState(editState); 
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))); 
    console.log('editorState ==>' , draftToHtml(convertToRaw(editorState.getCurrentContent()))); 
   },[editorState])

    return (    
    <>
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