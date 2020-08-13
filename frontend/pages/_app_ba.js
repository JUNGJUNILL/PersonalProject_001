

import 'antd/dist/antd.css'; 
import  '../CSS/antdMobile.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import AppLayOut from '../components/AppLayOut';

const Project01_TodoList = ({ Component }) => (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>wearehot</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.3.3/antd-mobile.css" integrity="sha256-uZbNsqglsHyapiY6Nlj8o9kAmliY/rWNCTqthjIHIXw=" crossorigin="anonymous" />
      </Head>
      <AppLayOut>
        <Component />
      </AppLayOut>

    </>
  );

export default wrapper.withRedux(Project01_TodoList);