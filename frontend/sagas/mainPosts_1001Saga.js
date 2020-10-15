import axios from 'axios'
import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import 
    {
        MAINPOSTS_1001_LIST_REQUEST,
        MAINPOSTS_1001_LIST_SUCCESS,
        MAINPOSTS_1001_LIST_FAILURE,    

        MAINPOSTS_1001_DETAIL_INFO_REQUEST,
        MAINPOSTS_1001_DETAIL_INFO_SUCCESS,
        MAINPOSTS_1001_DETAIL_INFO_FAILURE,
    } 
from '../reducers/mainPosts_1001'; 



//mainPost_1001 리스트 
//-----------------------------------------------------------------------------------
function APImainPosts_1001List(data){
    return axios.post('/mainPosts_1001',{data},{withCredentials:true})
}

function* sagaMainPosts_1001List(action){

    try{
      const result = yield call(APImainPosts_1001List,action.data);  
      yield  put({
            type:MAINPOSTS_1001_LIST_SUCCESS, 
            data:result.data,
        });

    }catch(e){

        console.error(e); 
        alert('error', e); 
        yield put({
            type:MAINPOSTS_1001_LIST_FAILURE, 
            error: e, 
        }); 
    }
}

function* watchMainPosts_1001(){
    yield takeLatest(MAINPOSTS_1001_LIST_REQUEST,sagaMainPosts_1001List); 
}
//-----------------------------------------------------------------------------------




//mainPost_1001 상세정보 
//-----------------------------------------------------------------------------------
function APImainPosts_1001Detail(data){
    return axios.post('/mainPosts_1001/mainPosts_1001Detail',{data},{withCredentials:true})
}

function* sagaMainPosts_1001Detail(action){

    try{
      const result = yield call(APImainPosts_1001Detail,action.data); 
      console.log('infoSaga' ,result.data);;
      yield  put({
            type:MAINPOSTS_1001_DETAIL_INFO_SUCCESS, 
            data:result.data,
        });

    }catch(e){

        console.error(e); 
        alert('error', e); 
        yield put({
            type:MAINPOSTS_1001_DETAIL_INFO_FAILURE, 
            error: e, 
        }); 
    }
}

function* watchMainPosts_1001Detail(){
    yield takeLatest(MAINPOSTS_1001_DETAIL_INFO_REQUEST,sagaMainPosts_1001Detail); 
}
//-----------------------------------------------------------------------------------





export default function* mainPosts_1001Saga(){

    yield all([
        fork(watchMainPosts_1001), 
        fork(watchMainPosts_1001Detail), 
     ])
}