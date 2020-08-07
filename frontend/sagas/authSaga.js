import axios from 'axios'
import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import 
    {JOIN_REQUEST,
     JOIN_SUCCESS,
     JOIN_FAILURE,
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAILURE, 
    } 
from '../reducers/auth'; 


function APIJoin(data){

    return axios.post('/auth',{data},{withCredentials:true}); 

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

        alert('에러발생'); 

        yield put({
            type:JOIN_FAILURE,
            error:e, 
        })
    }

}



function* watchJoin(){
    yield takeLatest(JOIN_REQUEST,sagaJoin)
}

function APILogin(data){

    return axios.post('/auth/login',{data},{withCredentials:true}); 
}


function* sagaLogin(action){

    const result = yield call(APILogin,action.data); 

    try{

    }catch(e){
        alert('로그인 에러'); 
        yield put({
            type:LOGIN_FAILURE, 
            error:e,
        })
    }
}

function* watchLogin(){
    yield takeLatest(LOGIN_REQUEST,sagaLogin); 
}


export default function* authSag(){


    yield all([
        fork(watchJoin), 
        fork(watchLogin), 
        
    ])
}