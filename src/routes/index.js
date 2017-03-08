/*
	Routes 路由配置
*/
import React from 'react';
import { Router, hashHistory,IndexRoute,Route } from 'react-router';

// const routes = {
//   component: require('PAGES/Layouts').default,
//   childRoutes: [{
//       // 首页跳转
//       path: '/',
//       indexRoute: {
//         onEnter: (nextState, replace) => replace('', 'home')
//       },
//     },
//     // 首页
//     {
//       path: 'home',
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('PAGES/home').default)
//         })
//       }
//     },
//     // 登录
//     {
//       path: 'userLogin',
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('PAGES/userLogin').default)
//         })
//       }
//     },
//     // 404
//     {
//       path: '*',
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('PAGES/404').default);
//         });
//       }
//     }
//   ]
// };

import Layouts from "PAGES/Layouts";
import Home from "PAGES/home";
import UserLogin from "PAGES/userLogin";
import NoFound from "PAGES/404";

const routes = (
    <Router>
        <Route path="/UserLogin" component={UserLogin}/>
        <Route path="/" component={Layouts}>
            <IndexRoute component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/404" component={NoFound}/>
            <Route path="*" component={Home}/>
        </Route>
    </Router>
);


export default <Router history = {hashHistory} routes = {routes} />;
