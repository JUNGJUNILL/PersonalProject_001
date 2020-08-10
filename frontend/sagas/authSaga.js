import axios from 'axios'
import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import 
    {JOIN_REQUEST,
     JOIN_SUCCESS,
     JOIN_FAILURE,
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAILURE, 
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAILURE,
    } 
from '../reducers/auth'; 


//유저정보 유지 사이클 
//------------------------------------------------------------------------
function APILoadUser(){

    return axios.get(`/auth` , {withCredentials:true}); 
}

function* sagaLoadUser(action){

    try{
        const result = yield call(APILoadUser,action.data); 
        console.log('result====>' , result); 
        yield put({
                type:LOAD_USER_SUCCESS, 

            
        }); 

    }catch(e){
        console.error(e); 
        yield put({
            type:LOAD_USER_FAILURE,
            error:e, 
        });
    }

}


function* watchLoadUser(){
    yield takeLatest(LOAD_USER_REQUEST,sagaLoadUser);
}
//------------------------------------------------------------------------




//회원가입 사이클 
//------------------------------------------------------------------------
function APIJoin(data){
    console.log('data==>' , data); 
    return axios.post('/auth/join',{data},{withCredentials:true}); 

}




function* sagaJoin(action){
    
    try{
       console.log(action, action.data);
        const result = yield call(APIJoin,action.data); 
        yield put({
            type:JOIN_SUCCESS,
            data: result,
        }); 

    }catch(e){

      console.error(e); 

        yield put({
            type:JOIN_FAILURE,
            error:e, 
        })
    }

}



function* watchJoin(){
    yield takeLatest(JOIN_REQUEST,sagaJoin)
}
//------------------------------------------------------------------------



//로그인 사이클
//------------------------------------------------------------------------
function APILogin(data){
    return axios.post('/auth/login',data,{withCredentials:true}); 
}

function* sagaLogin(action){


    try{
        const result = yield call(APILogin,action.data); 

        yield put({
            type:LOGIN_SUCCESS,
            data: result.data[0],
        }); 


    }catch(e){
        alert('로그인 에러'); 
        yield put({
            type:LOGIN_FAILURE, 
            error:e,
        })
    }
}

function* watchLogin(){
    yield takeEvery(LOGIN_REQUEST,sagaLogin); 
}
//------------------------------------------------------------------------


export default function* authSag(){


    yield all([
        fork(watchJoin), 
        fork(watchLogin), 
        fork(watchLoadUser), 
        
    ])
}