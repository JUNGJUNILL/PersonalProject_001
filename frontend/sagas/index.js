import {all,call} from 'redux-saga/effects'; 
import studySaga  from './studySaga'; 

export default function* rootSaga(){
    yield all([
        call(studySaga), 
    ])
}