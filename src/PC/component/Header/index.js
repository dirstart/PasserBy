import React, { Component } from 'react';
import {Row, Col} from 'antd';

import Avatar from './Avatar';
import SfMenu from './SfMenu';

import './index.less';

class Header extends Component {
    render() { 
        return ( <header className="pc-main-header">
            <Row>
                <Col span={2}></Col>
                <Col span={4}>
                    <Avatar></Avatar>
                </Col>
                <Col span={16}>
                    <SfMenu></SfMenu>
                </Col>
                <Col span={2}></Col>
            </Row>
        </header> )
    }
}
 
export default Header;