/**
 * 首页
 */
// react 相关库
import React from 'react';
import ReactDOM from 'react-dom';
import { fetch } from "UTILS";
// antd 组件
import { DatePicker, message } from 'antd';

// 页面组件（导出）
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  test() {
    //fetch('/api/aa').then(res=> res.json()).then(res => {alert(JSON.stringify(res));})
    fetch('/api/index/fuck',{
        method:"post",
    })
    .then(res => {
        console.log(res);
    })
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }} onClick={this.test.bind(this)}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    );
  }
}
