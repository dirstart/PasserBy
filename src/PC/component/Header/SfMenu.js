import React, { Component } from 'react';
import {Menu, Tabs, Icon, Modal, Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class SfMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "shouye",
            isLogin: false,
            modalVisible: false,
            userAction: 'login'
        }
    }
    render() {
        const state = this.state;
        const {getFieldDecorator} = this.props.form;
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
                <Menu.Item key="shouye">
                    <Link to="/p_home">
                        <Icon type="appstore"/>首页
                    </Link>
                </Menu.Item>
                <Menu.Item key="yuedu">
                    <Link to="/p_reader">
                        <Icon type="appstore"/>阅读
                    </Link>
                </Menu.Item>
                <Menu.Item key="bianji">
                    <Link to="/p_writer">
                        <Icon type="appstore"/>编辑
                    </Link>
                </Menu.Item>
                <Menu.Item key="xiangyata">
                    <Icon type="appstore"/>象牙塔
                </Menu.Item>
                <Menu.Item key="mingzhu">
                    <Icon type="appstore"/>个人测写
                </Menu.Item>
                <Menu.Item key="xinqing">
                    <Icon type="appstore"/>普罗大众
                </Menu.Item>
                <Menu.Item key="qita">
                    <Icon type="appstore"/>关于网站
                </Menu.Item>
                {userShow}
            </Menu>
            <Modal 
                title="用户中心"
                wrapClassName="vertical-center-modal" 
                visible={state.modalVisible}
                width={500}
                onCancel={() => this.setModalVisible(false)}
                footer={null}
            >
                <Tabs type="card" onChange={this.handleUserAction.bind(this)}>
                    <TabPane tab={<span><Icon type="android" />登陆</span>} key="login">
                        <Form layout="horizontal" onSubmit={this.handleLogin.bind(this)}>
                            <FormItem label="账户">
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '用户名不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem label="密码">
                                {getFieldDecorator('userPsd', {
                                    rules: [{ required: true, message: '密码不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" className="pc-login-btn" htmlType="submit">登录</Button>
                            <Button type="primary" className="pc-close-btn" onClick={() => this.setModalVisible(false)} ghost>关闭</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab={<span><Icon type="apple" />注册</span>} key="register">
                        <Form layout="horizontal" onSubmit={this.handleRegister.bind(this)}>
                            <FormItem label="账户">
                                {getFieldDecorator('rUserName', {
                                    rules: [{ required: true, message: '用户名不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem label="密码">
                                {getFieldDecorator('rUserPsd', {
                                    rules: [{ required: true, message: '密码不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem label="确认密码">
                                {getFieldDecorator('rxUserPsd', {
                                    rules: [{ required: true, message: '密码不能为空!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" className="pc-register-btn" htmlType="submit">注册</Button>
                            <Button type="primary" className="pc-close-btn" onClick={() => this.setModalVisible(false)} ghost>关闭</Button>
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

    async handleLogin(e) {
        e.preventDefault();
        let formData = this.props.form.getFieldsValue(),
            userName = (formData.userName && formData.userName.trim()) || '',
            userPsd = (formData.userPsd && formData.userPsd.trim()) || '';

        if (!userName.length || !userPsd.length) {
            alert('所有信息均不能为空');
            return;
        }
        const userData = {
            userName,
            userPsd
        };

        const {data} = await Axios.get('/user/login', {
            params: userData
        });

        if (!data.success) {
            alert(data.msg);
        }

        console.log('登陆成功');
        
    }

    async handleRegister(e) {
        e.preventDefault();
        let formData = this.props.form.getFieldsValue(),
            userName = (formData.rUserName && formData.rUserName.trim()) || '',
            userPsd = (formData.rUserPsd && formData.rUserPsd.trim()) || '',
            userPsdX = (formData.rxUserPsd && formData.rxUserPsd.trim()) || '';

        if (userPsd !== userPsdX) {
            alert('两次密码不一样');
            return;
        }
        if (!userName || !userPsd || !userPsdX) {
            alert('所有信息均不能为空');
            return;
        }

        const userData = {
            userName,
            userPsd
        };

        const {data} = await Axios.post('/user/register', userData);
        if (!data.success) {
            console.log(data);
            alert("错误信息:" + data && data.msg);
        } else {
            // 注册成功，关闭窗口，自动登陆
            alert('注册成功,正在为您自动登陆');
            this.setModalVisible(false);
        }
    }
}
 
export default SfMenu = Form.create({})(SfMenu);