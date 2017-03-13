import React, {Component} from "react";
import {Button, Form, Input, Checkbox, Alert} from "antd";

import { fetch,ruleType } from "UTILS";

const createForm = Form.create;
const FormItem = Form.Item;
@createForm()
export default class UserLogin extends Component {
    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props)

    }

    componentDidUpdate() {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if(!!errors) {
                return;
            }
            if(values) {
                fetch('/api/user/login',{
                    "method":"post",
                    "body":values
                })
                .then(res => {
                    console.log(res);
                })
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        let {message, loading} = this.props;
        const emailProps = getFieldDecorator('email', {
            initialValue: "",
            rules: [
                {
                    required: true,
                    message: '请输入账户名'
                },
                ruleType("email")
            ]
        });
        const passwordProps = getFieldDecorator('password', {
            rules: [
                {
                    required: true,
                    message: '请输入密码'
                },

            ]
        });
        // const agreementProps = getFieldDecorator('agreement', {
        //     valuePropName: 'checked',
        //     initialValue: "" ? true : false
        // });
        return (
            <div style={{overflow: 'hidden'}} className="login-bg" >
                <div className="login-main">
                    <div className="login-title">
                        <h3>xcxplus</h3>
                    </div>
                    <div className="login-cnt">
                        <div>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                {this.message}
                                <FormItem label="">
                                    {emailProps(<Input placeholder="请输入账户名"/>)}
                                </FormItem>
                                <FormItem label="">
                                    {passwordProps(<Input type="password" placeholder="请输入密码"/>)}
                                </FormItem>
                                {/*
                                    <FormItem>
                                    {agreementProps(<Checkbox >记住账号</Checkbox>)}
                                    </FormItem>
                                */}
                                <FormItem wrapperCol={{span: 17, offset: 7}}>
                                    <Button style={{width: 165}}
                                            loading={loading}
                                            type="primary"
                                            htmlType="submit">
                                        登录
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    get message() {
        let {message, loading} = this.props;
        if(message && message != null && message != '') {
            return (<Alert showIcon message={this.props.message} type="error"/>)
        } else {
            return;
        }
    }
}
