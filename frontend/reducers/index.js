import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import count from './count';
import emp from './emp';
import auth from './auth';
import mainPosts_1001 from './mainPosts_1001' 

const rootReducer = combineReducers({
    count, // 여기에 다른 리듀서들을 더 적으면 된다!
    emp,
    auth, 
    mainPosts_1001,
});

export default rootReducer; // _app.js에서 reducer로 사용된다!