import React, { Component } from 'react';

import {Avatar, Tag} from 'antd';

import './index.less';

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
                <Tag color="#f50" onClick={this.handleSignIn.bind(this)}>签到</Tag>
            </div>

            <div className="mobile-header-item mobile-user-avatar">
                <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon="user" />
            </div>

        </div> )
    }

    handleSignIn() {
        console.log('sign in');
    }
}
 
export default MHeader;