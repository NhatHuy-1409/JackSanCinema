import React from 'react';
import ReactDOMClient from 'react-dom/client';
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
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

