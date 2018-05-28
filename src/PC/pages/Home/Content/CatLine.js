import React, { Component } from 'react';

import {Row, Col, Card} from 'antd';

class CatLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-home-cat-line">
            <head>这里是类别栏目的名字</head>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
            </Row>
        </div> )
    }
}
 
export default CatLine;