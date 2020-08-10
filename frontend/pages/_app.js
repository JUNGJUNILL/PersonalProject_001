import AppLayOut from '../components/AppLayOut';
import Head      from 'next/head';
import PropTypes from 'prop-types'

import 'antd/dist/antd.css'; 
import  '../CSS/antdMobile.css';





import withRedux , {createWrapper} from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer  from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'; 
import { LOAD_USER_REQUEST } from '../reducers/auth';




//프로젝트 고정 틀
const Project01_TodoList = ({Component}) =>{

        return (
            <div>
                <Head>
                    <title>TodoList</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.3.3/antd-mobile.css" integrity="sha256-uZbNsqglsHyapiY6Nlj8o9kAmliY/rWNCTqthjIHIXw=" crossorigin="anonymous" />
                </Head>
                <AppLayOut>
                    <Component />
                </AppLayOut>
            </div>
            ); 


}


Project01_TodoList.getInitialProps = async (context)=>{
                                            //▲ next에서 제공해줌
  const { ctx,Component } = context; 
  let pageProps ={}; 

  const state = ctx.store.getState(); 
  //console.log('all state=>>' , state); 
  //프로젝트 전체 stat를 가져 올 수 있다. 

  //(새로고침)로그인 정보 유지
  if(!state.auth.userInfo){
      ctx.store.dispatch({
        type:LOAD_USER_REQUEST,
      });

  }

  if(Component.getInitialProps){
  pageProps =  await Component.getInitialProps(ctx); 
  }
  
  return {pageProps}; 

}


Project01_TodoList.propTypes = { 
  Component:PropTypes.elementType.isRequired, 

}


const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware(); 
  const middlewares = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.
  const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(applyMiddleware(...middlewares)) : 
        composeWithDevTools(
          applyMiddleware(...middlewares)
        );
  const store = createStore(reducer, initialState, enhancer);
                //react에서 redux를 사용하기 위해서는 createStore로 store를 생성해 주어야 한다. 
                //redux-next-wapper 6 버전 부터는 Provider store={store}를 내부적으로 해 준다. 

   sagaMiddleware.run(rootSaga); 
   return store;

}
  
const wrapper = createWrapper(configureStore, {debug: false}); 
export default wrapper.withRedux(Project01_TodoList); 