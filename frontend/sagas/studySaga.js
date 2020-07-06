import {all,fork,takeLatest,takeEvery ,put, delay,call} from 'redux-saga/effects'; 
import {COUNT_PLUS_REQUEST,COUNT_PLUS_SUCCESS, COUNT_PLUS_FAILURE, COUNT_MINUS_REQUEST, COUNT_MINUS_SUCCESS, COUNT_MINUS_FAILURE} from '../reducers/count'; 




function* sagaPlus(action){

    try{
        console.log('action.type 사가...' , action.type); 
      yield  put({
            type:COUNT_PLUS_SUCCESS, 
            data: 1, 
        })

    }catch(e){

        console.error(e); 
        alert('사가 에러'); 
        yield put({
            type:COUNT_PLUS_FAILURE, 
            error: e, 
        }); 
    }
}

function* watchSagaPlus(){
    console.log('watchSagaPlus'); 
    yield takeEvery(COUNT_PLUS_REQUEST,sagaPlus); 
}





function* sagaMinus(action){

    try{
      yield  put({
            type:COUNT_MINUS_SUCCESS, 
            data: 1, 
        })

    }catch(e){

        console.error(e); 
        alert('사가 에러'); 
        yield put({
            type:COUNT_MINUS_FAILURE, 
            error: e, 
        }); 
    }
}

function* watchMinus(){
    console.log('watchMinus'); 
    yield takeEvery(COUNT_MINUS_REQUEST,sagaMinus); 
}


export default function* studySaga(){

    yield all([
        fork(watchSagaPlus), 
        fork(watchMinus), 
     ])
}