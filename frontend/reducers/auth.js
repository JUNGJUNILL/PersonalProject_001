import produce from 'immer'


export const  initialState = {

    isJoinng : false, //회원가입 시도중 
    joined   : ''   , //회원가입 성공 

}

export const JOIN_REQUEST = 'JOIN_REQUEST'; 
export const JOIN_SUCCESS = 'JOIN_SUCCESS'; 
export const JOIN_FAILURE = 'JOIN_FAILURE'; 

export const LOAD_LOGIN_REQUEST = 'LOAD_LOGIN_REQUEST'; 

const reducer = (state = initialState, action) =>{


    return produce(state,(draft)=>{

        switch(action.type){

            case JOIN_REQUEST: {
                draft.isJoinng = true;
                break; 
            }

            case JOIN_SUCCESS: {
                draft.isJoinng = false; 
                draft.joined   = '회원가입 성공!'; 
                break; 
            }

            case JOIN_FAILURE: {
                break; 
            }

            //로그인 창 화면전환
            case LOAD_LOGIN_REQUEST : {
                draft.joined ='';     
                break;
            }

            default : 
        
            break; 
        }

    }); 

}


export default reducer;