import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Tag, Icon, Button} from 'antd';
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
                <Link to="/m_home">
                    <Avatar style={{ backgroundColor: '#f0f0f0' }} icon="user" />
                </Link>
            </div>

            <div className="mobile-header-item mobile-mode">
                <ButtonGroup>
                    <nav>
                        <Button type="primary">
                            <Link to="/m_reader">阅读<Icon type="cloud" /></Link>
                        </Button>
                        <Button type="primary">
                            <Link to="/m_writer">写作<Icon type="cloud-download" /></Link>
                        </Button>
                    </nav>
                </ButtonGroup>
            </div>



        </div> )
    }

    handleSignIn() {
        console.log('sign in');
    }
}
 
export default MHeader;