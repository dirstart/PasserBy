import React, { Component } from 'react';
import Axios from 'axios';
import {Row, Col, Card} from 'antd';

class CatLine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookList: []
        }
    }
    
    componentWillMount() {
        const type = this.props.cat && this.props.cat.cat;
        const num = this.props.cat && this.props.cat.num;
        this.getBook(type, num);
    }

    render() {
        const {bookList} = this.state;
        console.log('test', bookList);
        return ( <div className="pc-hsome-cat-line">
            <head>这里是类别栏目的名字</head>
            <Row gutter={16}>
                {
                    bookList.map((book, index) => (
                        <Col span={8}>
                            <Card
                                bordered={true}
                                hoverable="true"
                                title={book.title}
                            >
                                <img src={book.cover}
                                    className="pc-book-cover"
                                    style={{width: '100%', height: '100%',overflow: 'hidden'}}
                                alt=""/>
                            </Card>
                        </Col>
                    ))
                }
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
        if (data.success) {
            this.setState({
                bookList: data.data
            })
        }
    }
}
 
export default CatLine;