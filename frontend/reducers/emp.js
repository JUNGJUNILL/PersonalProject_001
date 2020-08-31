import produce from 'immer'


export const  initialState = {

    emplist : [], 
    imagePaths : [],

}

export const EMP_LIST_REQUEST = 'EMP_LIST_REQUEST'; 
export const EMP_LIST_SUCCESS = 'EMP_LIST_SUCCESS'; 
export const EMP_LIST_FAILURE = 'EMP_LIST_FAILURE'; 


export const EMP_INSERT_REQUEST = 'EMP_INSERT_REQUEST'; 
export const EMP_INSERT_SUCCESS = 'EMP_INSERT_SUCCESS'; 
export const EMP_INSERT_FAILURE = 'EMP_INSERT_FAILURE'; 

export const UPLOAD_IMAGES_REQUEST="UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS="UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE="UPLOAD_IMAGES_FAILURE";


const reducer = (state = initialState, action) =>{


    return produce(state,(draft)=>{

        switch(action.type){

            case EMP_LIST_REQUEST: {
                break; 
            }


            case EMP_LIST_SUCCESS: {
                draft.emplist.length=0; 
                //배열 초기화
                action.data.forEach((v)=>{
                    draft.emplist.push(v); 
                }); 
                break; 
            }

            case EMP_LIST_FAILURE: {
                break; 
            }


            case UPLOAD_IMAGES_REQUEST: {
                break; 
            }


            case UPLOAD_IMAGES_SUCCESS: {
                
                draft.imagePaths.length=0; 
                action.data.forEach((v)=>{
                    draft.imagePaths.push(v); 
                }); 

                break; 
            }

            case UPLOAD_IMAGES_FAILURE: {
                break; 
            }






            default : break; 
        }

    }); 

}


export default reducer;