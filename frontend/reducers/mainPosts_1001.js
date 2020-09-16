import produce from 'immer'


export const  initialState = {

    mainPosts_1001 : [], 
    imagePaths : [],

}

export const MAINPOSTS_1001_LIST_REQUEST='MAINPOSTS_1001_LIST_REQUEST';
export const MAINPOSTS_1001_LIST_SUCCESS='MAINPOSTS_1001_LIST_SUCCESS';
export const MAINPOSTS_1001_LIST_FAILURE='MAINPOSTS_1001_LIST_FAILURE';

export const MAINPOSTS_1001_DETAIL_INFO_REQUEST ='MAINPOSTS_1001_DETAIL_INFO_REQUEST'; 
export const MAINPOSTS_1001_DETAIL_INFO_SUCCESS ='MAINPOSTS_1001_DETAIL_INFO_SUCCESS'; 
export const MAINPOSTS_1001_DETAIL_INFO_FAILURE ='MAINPOSTS_1001_DETAIL_INFO_FAILURE'; 


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







//게시글 상세 페이지 가져오기 
//----------------------------------------
            case MAINPOSTS_1001_DETAIL_INFO_REQUEST: {
                break; 
            }

            case MAINPOSTS_1001_DETAIL_INFO_SUCCESS: {


                break; 
            }

            case MAINPOSTS_1001_DETAIL_INFO_FAILURE: {
                break; 
            }
//----------------------------------------





            default : break; 
        }

    }); 

}


export default reducer;