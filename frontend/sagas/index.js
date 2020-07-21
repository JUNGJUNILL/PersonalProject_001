import {all,call} from 'redux-saga/effects'; 
import studySaga  from './studySaga';
import empListSaga from './empListSaga'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3095/api'; 

export default function* rootSaga(){
    yield all([
        call(studySaga), 
        call(empListSaga), 
    ])
}