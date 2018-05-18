import React, { Component } from 'react';

import {Row, Col} from 'antd';

import MainLeft from './Left/index';

class PCMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Row>
                <Col span={2}></Col>
                <Col span={4}>
                    <MainLeft></MainLeft>
                </Col>
                <Col span={12}>
                </Col>
                <Col span={4}>
                </Col>
                <Col span={2}></Col>
            </Row>
        </div> )
    }
}
 
export default PCMain;