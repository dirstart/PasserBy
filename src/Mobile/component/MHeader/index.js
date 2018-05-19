import React, { Component } from 'react';

import {Avatar, Tag, Menu, Icon, Button} from 'antd';
import './index.less';

const ButtonGroup = Button.Group;

class MHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="mobile-header">
            <a className="mobile-header-item mobile-header-logo">
                <i className="logo-image iconfont icon-leaf"></i>
                <span className="logo-text">Passer-By</span>
            </a>

            <div className="mobile-header-item mobile-sign-in">
                <Tag color="#089e8a" onClick={this.handleSignIn.bind(this)}>签到</Tag>
            </div>

            <div className="mobile-header-item mobile-user-avatar">
                <Avatar style={{ backgroundColor: '#f0f0f0' }} icon="user" />
            </div>

            <div className="mobile-header-item mobile-mode">
                <ButtonGroup>
                    <Button type="primary">阅读<Icon type="cloud" /></Button>
                    <Button type="primary">写作<Icon type="cloud-download" /></Button>
                </ButtonGroup>
            </div>



        </div> )
    }

    handleSignIn() {
        console.log('sign in');
    }
}
 
export default MHeader;