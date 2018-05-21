import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout, Icon} from 'antd';

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
            bookList: []
         }
    }
    render() { 
        return ( <div className="mobile-reader-wrap">
            <Layout>
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
            </Layout>
        </div> )
    }
}
 
export default ReaderMain;