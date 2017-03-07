// /**
//  * 入口文件
//  */
// import React from 'react';
// import ReactDom from 'react-dom';
//
// // 导入公共样式
//
// import 'ASSETS/less/main.less';
//
// // 导入路由配置
// import routes from '../routes';
//
// // 渲染页面
// ReactDom.render(routes, document.getElementById('root'));


/**
 * 入口文件
 */
import React from "react";
import info from '../../config/info';
import ReactDom from "react-dom";
import {Router, useRouterHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import routes from "../routes";
import {Provider} from "react-redux";
import {createHistory} from "history";
import configureStore from "../store/configureStore";
import "ASSETS/less/main.less";
const store = configureStore;
const createAppHistory = useRouterHistory(createHistory)
const appHistory = createAppHistory({
    basename: info.base.name
});
const history = syncHistoryWithStore(appHistory, store);
ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>
    , document.getElementById('root'))
