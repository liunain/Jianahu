//import './index.css';
// 以模块形式来导入css文件
//一下类似于pwa拥护第一次访问需要联网，第二次没网也可以见到第一次保存在浏览器里的
//import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
//index.js为程序入口；
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
//使用jsx语法要引入react;JSX自己的组件以大写字母开头，标签化引入 
ReactDOM.render(<App  />, document.getElementById('root'));
