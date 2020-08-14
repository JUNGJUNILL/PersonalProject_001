import axios from 'axios'
import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import 
    {EMP_LIST_REQUEST,
     EMP_LIST_SUCCESS,
     EMP_LIST_FAILURE
    } 
from '../reducers/emp'; 



function APIempList(data){
    return axios.post('/emp',{data},{withCredentials:true})
}

function* sagaEmpList(action){

    try{
      const result = yield call(APIempList,action.data); 
        console.log(result); 
      yield  put({
            type:EMP_LIST_SUCCESS, 
            data:result.data,
        });

    }catch(e){

        console.error(e); 
        alert('error', e); 
        yield put({
            type:EMP_LIST_FAILURE, 
            error: e, 
        }); 
    }
}

function* watchempList(){
    yield takeLatest(EMP_LIST_REQUEST,sagaEmpList); 
}

export default function* empListSaga(){

    yield all([
        fork(watchempList), 
     ])
}