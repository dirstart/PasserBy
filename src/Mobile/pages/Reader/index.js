import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout, Icon, message} from 'antd';
import Axios from 'axios';

import './index.less';

const {Header, Content} = Layout;

const headerStyle = {
    background: '#089e8a',
    color: '#fff'
}

const contentStyle = {
    background: 'rgb(169, 216, 174)',
    height: 'calc(100vh - 1rem - 64px)'
}

class ReaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookList: [],
            isReading: false,
            bookMsg: {},
            isShowNav: false
        }
    }

    componentDidMount() {
        const search = window.location.search.split('?')[1];
        const ID = ((search && search.length) || false) ? search.split('=')[1] : 'no';
        if (ID !== 'no') {
            this.setState({
                isReading: true
            });
            this.initStatus(ID);
        }
    }

    render() { 
        const {isReading, bookMsg, isShowNav} = this.state;
        return ( <div className="mobile-reader-wrap">
            {
                isReading ?
                (<div className="mobile-read-mod-wrap">
                    <div className="mobile-read-touch-panel"
                        onClick={this.handleTouchPanel.bind(this)}
                    ></div>
                    <div className="mobile-read-mod-top"
                        style={{display: isShowNav ? 'block' : 'none'}}
                    >
                        <Icon type="left-circle-o" style={{margin: '0 5px 0 10px'}}/>
                        <span>返回书架</span>
                    </div>
                    <div className="mobile-read-mod-content">
                        {bookMsg && bookMsg.content}
                    </div>
                    <div className="mobile-read-mod-bottom"
                        style={{display: isShowNav ? 'block' : 'none'}}
                    >
                        <div className="bottom-item">
                            <Icon type="menu-fold" style={{fontSize: 24, margin: '10px 0 5px 0'}} />
                            <div className="bottom-title">目录</div>
                        </div>
                        <div className="bottom-item">
                            <Icon type="amazon" style={{fontSize: 24, margin: '10px 0 5px 0'}}/>
                            <div className="bottom-title">字体</div>
                        </div>
                        <div className="bottom-item">
                            <Icon type="key" style={{fontSize: 24, margin: '10px 0 5px 0'}}/>
                            <div className="bottom-title">夜间</div>
                        </div>
                    </div>
                </div>)
                :
                (<Layout>
                    <Header style={headerStyle}>
                        <span>Reading</span>
                        <Link to="/m_search" className="mobile-reader-search-icon-wrap">
                            <Icon type="search" className="mobile-reader-search-icon" />
                        </Link>
                    </Header>
                    <Content style={contentStyle}>
                        {
                            this.state.bookList.length === 0 ?
                            (
                                <div className="mobile-reader-booklist-null">
                                    书架空空的！快去添加点书吧！
                                </div>
                            )
                            :
                            <div>有书了</div>
                        }
                    </Content>
                </Layout>)
            }
            
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
            });
        } else {
            message.error('数据库获取失败');
        }
    }

    handleTouchPanel() {
        this.setState({
            isShowNav: !this.state.isShowNav
        })
    }
}
 
export default ReaderMain;