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

        MAINPOSTS_1001_COMMENTS_REQUEST, 
        MAINPOSTS_1001_COMMENTS_SUCCESS, 
        MAINPOSTS_1001_COMMENTS_FAILURE, 

        MAINPOSTS_1001_COMMENTINSERT_REQUEST,
        MAINPOSTS_1001_COMMENTINSERT_SUCCESS,
        MAINPOSTS_1001_COMMENTINSERT_FAILURE, 

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



//mainPost_1001 상세 정보 댓글 리스트
//-----------------------------------------------------------------------------------
function APImainPosts_1001CommentList(data){
    return axios.post('/mainPosts_1001/mainPosts_1001Comments',{data},{withCredentials:true})
}


function* sagaMainPosts_1001CommentList(action){

    try{
      const result = yield call(APImainPosts_1001CommentList,action.data); 
      yield  put({
            type:MAINPOSTS_1001_COMMENTS_SUCCESS, 
            data:result.data,
        });

    }catch(e){

        console.error(e); 
        alert('error', e); 
        yield put({
            type:MAINPOSTS_1001_COMMENTS_FAILURE, 
            error: e, 
        }); 
    }
}


function* watchMainPosts_1001CommentList(){
    yield takeLatest(MAINPOSTS_1001_COMMENTS_REQUEST,sagaMainPosts_1001CommentList); 
}
//-----------------------------------------------------------------------------------




//mainPost_1001 댓글 입력
//-----------------------------------------------------------------------------------
function APImainPosts_1001CommentInsert(data){
    return axios.post('/mainPosts_1001/mainPosts_1001CommentInsert',{data},{withCredentials:true})
}


function* sagaMainPosts_1001CommentInsert(action){

    try{
      const result = yield call(APImainPosts_1001CommentInsert,action.data); 
      yield  put({
            type:MAINPOSTS_1001_COMMENTINSERT_SUCCESS, 
            data:result.data,
        });

    }catch(e){

        console.error(e); 
        alert('error', e); 
        yield put({
            type:MAINPOSTS_1001_COMMENTINSERT_FAILURE, 
            error: e, 
        }); 
    }
}


function* watchMainPosts_1001CommentInsert(){
    yield takeLatest(MAINPOSTS_1001_COMMENTINSERT_REQUEST,sagaMainPosts_1001CommentInsert); 
}
//-----------------------------------------------------------------------------------




export default function* mainPosts_1001Saga(){

    yield all([
        fork(watchMainPosts_1001), 
        fork(watchMainPosts_1001Detail), 
        fork(watchMainPosts_1001CommentList), 
        fork(watchMainPosts_1001CommentInsert), 
     ])
}