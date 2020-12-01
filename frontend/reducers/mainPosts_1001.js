import produce from 'immer'


export const  initialState = {

    
    mainPosts_1001     : [], 
    mainPosts_1001Info : [{}], 
                        //하 이것때매 몇시간을 날려 먹었는지.. 아크릴 새우님이 해결법을 알려주심
    mainPosts_1001Comments : [],
    mainPosts_1001CommentByComments:[{}],  
    imagePaths         : [],
    likeIsClicked :null, 
    clickCommentId:null, 
    clickedInfo:[{}], 


}

//게시물 list
export const MAINPOSTS_1001_LIST_REQUEST='MAINPOSTS_1001_LIST_REQUEST';
export const MAINPOSTS_1001_LIST_SUCCESS='MAINPOSTS_1001_LIST_SUCCESS';
export const MAINPOSTS_1001_LIST_FAILURE='MAINPOSTS_1001_LIST_FAILURE';

//게시물 상세 
export const MAINPOSTS_1001_DETAIL_INFO_REQUEST ='MAINPOSTS_1001_DETAIL_INFO_REQUEST'; 
export const MAINPOSTS_1001_DETAIL_INFO_SUCCESS ='MAINPOSTS_1001_DETAIL_INFO_SUCCESS'; 
export const MAINPOSTS_1001_DETAIL_INFO_FAILURE ='MAINPOSTS_1001_DETAIL_INFO_FAILURE'; 

//게시물 댓글 list 
export const MAINPOSTS_1001_COMMENTS_REQUEST = 'MAINPOSTS_1001_COMMENTS_REQUEST';
export const MAINPOSTS_1001_COMMENTS_SUCCESS = 'MAINPOSTS_1001_COMMENTS_SUCCESS';
export const MAINPOSTS_1001_COMMENTS_FAILURE = 'MAINPOSTS_1001_COMMENTS_FAILURE'; 

//게시물 대댓글 list 
export const MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST ='MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST'; 
export const MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS ='MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS'; 
export const MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE ='MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE'; 

//게시물 댓글 insert 
export const MAINPOSTS_1001_COMMENTINSERT_REQUEST = 'MAINPOSTS_1001_COMMENTINSERT_REQUEST';
export const MAINPOSTS_1001_COMMENTINSERT_SUCCESS = 'MAINPOSTS_1001_COMMENTINSERT_SUCCESS';
export const MAINPOSTS_1001_COMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTINSERT_FAILURE'; 

//게시물 대댓글 insert 
export const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST';
export const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS';
export const MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE = 'MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE'; 

//게시글 댓글 like / dislike 
export const MAINPOSTS_1001_COMMENTLIKE_REQUEST = 'MAINPOSTS_1001_COMMENTLIKE_REQUEST';
export const MAINPOSTS_1001_COMMENTLIKE_SUCCESS = 'MAINPOSTS_1001_COMMENTLIKE_SUCCESS';
export const MAINPOSTS_1001_COMMENTLIKE_FAILURE = 'MAINPOSTS_1001_COMMENTLIKE_FAILURE'; 



export const TEST_REQUEST = 'TEST_REQUEST'; 
export const TEST_SUCCESS = 'TEST_SUCCESS'; 
export const TEST_FAILURE = 'TEST_FAILURE'; 



const reducer = (state = initialState, action) =>{


    return produce(state,(draft)=>{

        switch(action.type){

//게시글 리스트 가져오기       
//----------------------------------------
            case MAINPOSTS_1001_LIST_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_LIST_SUCCESS: {
                draft.mainPosts_1001.length=0; 
                //배열 초기화
                action.data.forEach((v)=>{
                    draft.mainPosts_1001.push(v); 
                }); 
                break; 
            }

            case MAINPOSTS_1001_LIST_FAILURE: {
                break; 
            }
//----------------------------------------


//게시글 댓글 INSERT   
//----------------------------------------
            case MAINPOSTS_1001_COMMENTINSERT_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_COMMENTINSERT_SUCCESS: {

                draft.mainPosts_1001Comments.length=0; 
                action.data.forEach((v,i)=>{
                    draft.mainPosts_1001Comments.push(v); 
                }); 
                
                break; 
            }

            case MAINPOSTS_1001_COMMENTINSERT_FAILURE: {
                break; 
            }
//----------------------------------------

//게시글 대댓글 INSERT   
//----------------------------------------
            case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_SUCCESS: {
                draft.mainPosts_1001CommentByComments.length=0; 
                action.data.forEach((v)=>{
                    draft.mainPosts_1001CommentByComments.push(v); 
                }); 

                break; 
            }

            case MAINPOSTS_1001_COMMENTBYCOMMENTINSERT_FAILURE: {
                break; 
            }
//----------------------------------------



//게시글 상세 페이지 가져오기 
//----------------------------------------
            case MAINPOSTS_1001_DETAIL_INFO_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_DETAIL_INFO_SUCCESS: {

                draft.mainPosts_1001Info.length=0; 
                //배열 초기화
                action.data.forEach((v)=>{
                    draft.mainPosts_1001Info.push(v); 
                }); 
                break; 
            }

            case MAINPOSTS_1001_DETAIL_INFO_FAILURE: {
                break; 
            }
//----------------------------------------


//게시글 댓글 가져오기  
//----------------------------------------
            case MAINPOSTS_1001_COMMENTS_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_COMMENTS_SUCCESS: {              
                draft.mainPosts_1001Comments.length=0; 
                action.data.forEach((v)=>{
                    draft.mainPosts_1001Comments.push(v); 
                }); 
                break; 
            }

            case MAINPOSTS_1001_COMMENTS_FAILURE: {
                break; 
            }
//----------------------------------------



//게시글 대댓글 가져오기 clickCommentId
//----------------------------------------
            case MAINPOSTS_1001_COMMENTBYCOMMENT_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_COMMENTBYCOMMENT_SUCCESS: {              
                draft.mainPosts_1001CommentByComments.length=0; 
                draft.clickCommentId=action.data.param.commentId
                action.data.array.forEach((v)=>{
                    draft.mainPosts_1001CommentByComments.push(v); 
                }); 
                
                break; 
            }

            case MAINPOSTS_1001_COMMENTBYCOMMENT_FAILURE: {
                break; 
            }
//----------------------------------------





//게시글 댓글 like / dislike       
//----------------------------------------
            case MAINPOSTS_1001_COMMENTLIKE_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_COMMENTLIKE_SUCCESS: {
                draft.mainPosts_1001Comments.length=0; 
                action.data.forEach((v)=>{
                    draft.mainPosts_1001Comments.push(v); 
                }); 


                
                break; 
            }

            case MAINPOSTS_1001_COMMENTLIKE_FAILURE: {
                break; 
            }
//----------------------------------------





            default : break; 
        }

    }); 

}


export default reducer;