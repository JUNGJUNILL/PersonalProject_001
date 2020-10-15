import {all,call} from 'redux-saga/effects'; 
import studySaga  from './studySaga';
import empListSaga from './empListSaga'
import mainPosts_1001Saga from './mainPosts_1001Saga'; 
import authSaga from './authSaga'; 
import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:3095/api'; 
axios.defaults.baseURL = 'http://captainryan.gonetis.com:3095/api'; 


export default function* rootSaga(){
    yield all([
        call(studySaga), 
        call(empListSaga), 
        call(authSaga), 
        call(mainPosts_1001Saga), 
    ])
}