import produce from 'immer'


export const  initialState = {

    isJoinng : false, //회원가입 시도중 
    joined   : ''   , //회원가입 성공 

    isLogining : false, //로그인 시도 중
    userInfo : null,      //사용자 정보


}

export const JOIN_REQUEST = 'JOIN_REQUEST'; 
export const JOIN_SUCCESS = 'JOIN_SUCCESS'; 
export const JOIN_FAILURE = 'JOIN_FAILURE'; 

export const LOGIN_REQUEST = 'LOGIN_REQUEST'; 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; 
export const LOGIN_FAILURE = 'LOGIN_FAILURE'; 

export const LOAD_LOGIN_REQUEST = 'LOAD_LOGIN_REQUEST'; 

const reducer = (state = initialState, action) =>{


    return produce(state,(draft)=>{

        switch(action.type){

//회원가입
//------------------------------------------------
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
//------------------------------------------------

//로그인 창 화면전환
//------------------------------------------------
            case LOAD_LOGIN_REQUEST : {
                draft.joined ='';     
                break;
            }
//------------------------------------------------



//로그인
//------------------------------------------------
            case LOGIN_REQUEST :{
                draft.isLogining = true; 
                break; 
            }

            case LOGIN_SUCCESS :{
                draft.isLogining = false; 
                draft.userInfo = action.data; 
                break; 
            }
        
            case LOGIN_FAILURE :{

                break; 
            }
//------------------------------------------------

            default :  break;
    
             
        }

    }); 

}


export default reducer;