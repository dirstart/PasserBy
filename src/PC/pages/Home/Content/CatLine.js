import React, { Component } from 'react';
import Axios from 'axios';
import {Row, Col, Card} from 'antd';

class CatLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    componentWillMount() {
        const type = this.props.cat && this.props.cat.cat;
        const num = this.props.cat && this.props.cat.num;
        this.getBook(type, num);
    }

    render() { 
        return ( <div className="pc-home-cat-line">
            <head>这里是类别栏目的名字</head>
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        bordered={true}
                        hoverable="true" title="Card title">Card content</Card>
                </Col>
                <Col span={8}>
                    <Card
                        bordered={true}
                        hoverable="true" title="Card title">Card content</Card>
                </Col>
                <Col span={8}>
                    <Card
                        bordered={true}
                        hoverable="true" title="Card title">Card content</Card>
                </Col>
            </Row>
        </div> )
    }

    async getBook(type, num) {
        const {data} = await Axios.get('/pc/library/by-cat',{
            params: {
                type,
                num
            }
        });
        console.log(data);
    }
}
 
export default CatLine;