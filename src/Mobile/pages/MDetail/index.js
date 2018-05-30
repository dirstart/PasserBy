import React, { Component } from 'react';
import Axios from 'axios';
import {message, Layout, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';
import './index.less';
const Header = Layout.Header;

const headerStyle = {
    background: '#089e8a',
    color: '#fff'
}
const contentStyle = {
    background: 'rgb(169, 216, 174)',
    height: 'calc(100vh - 64px)'
}

class MDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookMsg: {}
        }
    }
    componentWillMount() {
        const search = window.location.search.split('?')[1];
        const ID = ((search && search.length) || false) ? search.split('=')[1] : 'no';
        this.initStatus(ID);
    }
    render() {
        const {bookMsg} = this.state;
        return ( <div className="m-book-detail" style={contentStyle}>
            <Header style={headerStyle} className="m-book-detail-header">
                <Link to="/m_search" className="m-book-detail-header-back">
                    <Icon type="left-circle-o" />
                </Link>
                <span className="m-book-detail-header-text">书籍详情</span>
                <Icon className="m-book-detail-header-share" type="share-alt" />
            </Header>
            <div className="m-book-detail-operate">
                <img className="m-book-detail-operate-img" src={bookMsg.cover} alt=""/>
                <section className="m-book-detail-operate-text">
                    <h3 className="md-title">{bookMsg.title}</h3>
                    <span className="md-author">{bookMsg.author}</span>
                    <span className="md-cat"> | {bookMsg.cat} | </span>
                    <span className="md-count">{bookMsg.count}字</span>
                </section>
            </div>
            <div className="m-book-detail-people">
                <span className="book-detail-people-collect">收藏人数(暂无) </span>
                <span className="book-detail-people-save">读者留存率(暂无)</span>
                <span className="book-detail-people-size">日更新字数(暂无)</span>
            </div>
            <div className="m-book-detail-info">
                {bookMsg.info}
            </div>
            <div className="m-book-detail-btn">
                <Button type="primary" className="btn" ghost>收藏了！</Button>
                <Button type="primary" className="btn" >开始阅读</Button>
            </div>
        </div> )
    }
    async initStatus(ID) {
        const {data} = await Axios.get('/pc/library/by-id', {
            params: {
                ID: ID
            }
        });
        if (data.success) {
            this.setState({
                bookMsg: data.data
            }, () => console.log(this.state.bookMsg));
        } else {
            message.error('数据库获取失败');
        }
    }
}
 
export default MDetail;