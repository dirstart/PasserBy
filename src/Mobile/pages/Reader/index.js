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

const bgColor = ['#f7eee5', '#e9dfc7', '#a4a4a4', '#cdefce', '#283548', '#666bfe'];

class ReaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookList: [],
            isReading: false,
            bookMsg: {},
            isShowNav: false,
            isShowTool: false,
            readBg: '#e9dfc7',
            fontColor: 'rgba(0, 0, 0, 0.65)',
            isNight: false
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
        const {isReading, bookMsg, isShowNav, isShowTool, readBg, fontColor, isNight} = this.state;
        return ( <div className="mobile-reader-wrap">
            {   
                isReading ?
                (<div className="mobile-read-mod-wrap">
                    <div className="mobile-read-touch-panel"
                        onClick={this.handleTouchPanel.bind(this)}
                    ></div>
                    <div className="mobile-read-tool" style={{display: isShowTool && isShowNav ? 'block' : 'none'}}>
                        <div className="mobile-read-tool-font mobile-tool-mod">
                            <span className="mobile-tool-font-text">字号</span>
                            <button className="mobile-tool-font-large">大</button>
                            <button className="mobile-tool-font-small">小</button>
                        </div>
                        <div className="mobile-read-tool-bg mobile-tool-mod">
                            <span className="mobile-tool-bg-text">背景</span>
                            <ul>
                                {bgColor.map((item, index) => (
                                    <li style={{backgroundColor: item}}
                                        key={index}
                                        onClick={this.handleChangeBg.bind(this, item)}
                                    >
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-read-mod-top"
                        style={{display: isShowNav ? 'block' : 'none'}}
                    >
                        <Icon type="left-circle-o" style={{margin: '0 5px 0 10px'}}/>
                        <span>返回书架</span>
                    </div>
                    <div className="mobile-read-mod-content"
                        style={{backgroundColor: readBg, color: fontColor}}
                    >
                        {bookMsg && bookMsg.content}
                    </div>
                    <div className="mobile-read-mod-bottom"
                        style={{display: isShowNav ? 'block' : 'none'}}
                    >
                        <div className="bottom-item">
                            <Icon type="menu-fold" style={{fontSize: 24, margin: '10px 0 5px 0'}} />
                            <div className="bottom-title">目录</div>
                        </div>
                        <div className="bottom-item" onClick={this.handleShowTool.bind(this)}>
                            <Icon type="amazon" style={{fontSize: 24, margin: '10px 0 5px 0'}}/>
                            <div className="bottom-title">字体</div>
                        </div>
                        <div className="bottom-item" onClick={this.handleSetNight.bind(this)}>
                            <Icon type="key" style={{fontSize: 24, margin: '10px 0 5px 0'}}/>
                            <div className="bottom-title">{isNight ? '白天' : '夜间'}</div>
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

    handleShowTool() {
        console.log('123');
        this.setState({
            isShowTool: !this.state.isShowTool
        });
    }

    handleChangeBg(color) {
        this.setState({
            readBg: color
        });
    }

    handleSetNight() {
        this.setState({
            fontColor: this.state.isNight ? '#ccc' : 'rgba(0, 0, 0, 0.65)',
            readBg: this.state.isNight ? '#111' : '#e9dfc7',
            isNight: !this.state.isNight
        });
    }
}
 
export default ReaderMain;