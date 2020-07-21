import produce from 'immer'


export const  initialState = {

    emplist : [], 
}

export const EMP_LIST_REQUEST = 'EMP_LIST_REQUEST'; 
export const EMP_LIST_SUCCESS = 'EMP_LIST_SUCCESS'; 
export const EMP_LIST_FAILURE = 'EMP_LIST_FAILURE'; 

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

            default : break; 
        }

    }); 

}


export default reducer;