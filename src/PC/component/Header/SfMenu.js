import React, { Component } from 'react';
// import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router';
// import  createBrowserHistory from 'history/createBrowserHistory';
import {Menu, Item, Tabs, Icon, Modal, Form, Input, Button, Checkbox} from 'antd';

// const customHistory = createBrowserHistory();
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class SfMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "kehuan",
            isLogin: false,
            modalVisible: false,
            userAction: 'login'
        }
    }
    render() {
        const state = this.state;
        const {getFieldDecorator} = this.props.form;
        console.log(this.props.form);
        const userShow = state.isLogin ?
            // (<Menu.Item key="logout" className="register">
            //     <Button type="primary" htmlType="button">
            //         {this.state.userNickName}
            //     </Button> &nbsp;&nbsp;
            //     <Button type="dashed" htmlType="button">
            //         {
            //             <Router history={customHistory}>
            //                 <Link to="god">
            //                     个人中心
            //                 </Link>
            //             </Router>
            //         }
            //     </Button>	
            //     &nbsp;&nbsp;
            //     <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            // </Menu.Item>)
            (null)
            :
            (
                <Menu.Item key="register" className="register">
                    <Icon type="appstore"/>注册/登陆
                </Menu.Item>
            );

        return ( <div className="pc-header-menu">
            <Menu mode="horizontal"
                selectedKeys={[state.current]}
                onClick={this.handleSelect}
            >
                <Menu.Item key="kehuan">
                    <Icon type="appstore"/>科幻
                </Menu.Item>
                <Menu.Item key="mohuan">
                    <Icon type="appstore"/>魔幻
                </Menu.Item>
                <Menu.Item key="xuanhuan">
                    <Icon type="appstore"/>玄幻
                </Menu.Item>
                <Menu.Item key="sanwen">
                    <Icon type="appstore"/>散文
                </Menu.Item>
                <Menu.Item key="mingzhu">
                    <Icon type="appstore"/>名著
                </Menu.Item>
                <Menu.Item key="xinqing">
                    <Icon type="appstore"/>心情
                </Menu.Item>
                <Menu.Item key="qita">
                    <Icon type="appstore"/>其他
                </Menu.Item>
                {userShow}
            </Menu>
            <Modal 
                title="用户中心"
                wrapClassName="vertical-center-modal" 
                visible={state.modalVisible}
                onCancel={() => this.setModalVisible(false)}
                onOk={() => this.setModalVisible(false)}
                okText="关闭"
            >
                <Tabs type="card" onChange={this.handleUserAction.bind(this)}>
                    <TabPane tab="登录" key="login">
                        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="账户">
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '用户名不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem label="密码">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '密码不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="register">
                        <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="账户">
                                <Input placeholder="请输入您的账号"{...getFieldDecorator('r_userName')}/>
                            </FormItem>
                            <FormItem label="密码">
                                <Input  type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')} />
                            </FormItem>
                            <FormItem label="确认密码">
                                <Input type="password"  placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')} />
                            </FormItem>
                            <Button type="submit" htmlType="submit">注册</Button>
                        </Form>
                    </TabPane>
                </Tabs>
            </Modal>
        </div> )
    }

    handleSelect = (e) => {
        this.setState({
            current: e.key
        })

        if (e.key === 'register') {
            this.setModalVisible(true);
        }
    }

    setModalVisible(value) {
        this.setState({
            modalVisible: value
        })
    }

    handleUserAction(key) {
        this.setState({
            action: key
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
}
 
export default SfMenu = Form.create({})(SfMenu);