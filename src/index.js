import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

//antd
import 'antd/dist/antd.css';
//react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
    <p>demo3</p>
  </Provider>
  ,
  document.getElementById('root')
);

j
