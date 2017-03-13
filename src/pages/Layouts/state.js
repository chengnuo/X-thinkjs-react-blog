/**
 * for Layouts
 * 
 * by koen
 * 2016/11/16
 */
//import { restate } from 'UTILS';
import restate from 'UTILS/restate';// 不写上面那句因为有些复杂依赖情况下babel会找不到方法导致出错

// 不写ES6的Class形式是因为压缩代码后在IE8会报错，具体原因无法考究
function State(){
    this.state = {
        loading: false, // 全局ajax的loading状态
        sysInfo: { // 全局用到的业务系统信息
            "adminLoginUrl": "",    //  管理员登录地址
            "appQrcodeUrl": "",     //  app二维码地址
            "financeInviteCodeCompanyUrl": "",	//	融资添加邀请码地址(企业)
            "financeInviteCodePersonUrl": "",  //  融资添加邀请码地址(个人)
            "logoutUrl": ""         //  登出地址
        }
    };
    this.sessionId = 'layouts_state';
}

export default restate.createState(State);