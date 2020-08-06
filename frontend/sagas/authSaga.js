import axios from 'axios'
import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import 
    {JOIN_REQUEST,
     JOIN_SUCCESS,
     JOIN_FAILURE
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


export default function* authSag(){


    yield all([
        fork(watchJoin), 
        
    ])
}