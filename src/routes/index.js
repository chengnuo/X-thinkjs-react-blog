// /*
// 	Routes 路由配置
// */
// import React from 'react';
// import { Router, hashHistory } from 'react-router';
//
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
//
// export default <Router history = {hashHistory} routes = {routes} />;


import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layouts from 'PAGES/Layouts' //ui视图
import Home from 'PAGES/home' //ui视图
import NotFound from 'PAGES/404' //ui视图



//import { loginRequireAuth } from '../auth/loginAuth';

//无状态（stateless）组件，一个简单的容器，react-router 会根据 route
//规则匹配到的组件作为 `props.children` 传入
// const Container = (props) => {
//     return (
//         <div>{props.children}</div>
//     );
// };

const routes =  (
    <Route>
        <Route path="/" component={Layouts}>
            <IndexRoute  component={Home} breadcrumbName={"首页"} />
            <Route path="/404" component={NotFound} breadcrumbName={"错误页面"} />
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
)
export default routes;
