import React, { Component } from 'react';
import Axios from 'axios';
import {Row, Col, Card} from 'antd';
import {Link} from 'react-router-dom';

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
        return ( <div className="pc-hsome-cat-line">
            <head>这里是类别栏目的名字</head>
            <Row gutter={16}>
                {
                    bookList.map((book, index) => (
                        <Col span={8}>
                            <Link to={`/p_reader?book=${book.ID}`}>
                                <Card
                                    bordered={true}
                                    hoverable="true"
                                    title={book.title}
                                    style={{height: '300px', overflow: 'hidden'}}
                                >
                                    <img src={book.cover}
                                        className="pc-book-cover"
                                        style={{width: '100%', height: '100%',overflow: 'hidden',
                                            backgroundSize: ''
                                        }}
                                    alt=""/>
                                    <Link to="/p_home">个人中心</Link>
                                </Card>
                            </Link>
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
        
        if (data.success) {
            this.setState({
                bookList: data.data
            })
        }
    }
}
 
export default CatLine;