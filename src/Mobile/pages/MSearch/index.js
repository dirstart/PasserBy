import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout, Icon, Input, Spin} from 'antd';

import BookCard from '../common/BookCard';
import './index.less';

const Header = Layout.Header;
const Content = Layout.Content;
const Search = Input.Search;
const headerStyle = {
    background: '#089e8a',
    color: '#fff'
}

const contentStyle = {
    background: 'rgb(169, 216, 174)',
    height: 'calc(100vh - 1rem - 64px)'
}

class MSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            bookList: []
         }
    }
    render() {
        let {bookList} = this.state;
        return ( <div className="mobile-search-page">
            <Header style={headerStyle}>
                <Link to="/m_reader" className="mobile-search-back">
                    <Icon type="arrow-left" />
                </Link>
                <Search
                    className="mobile-search-bar"
                    placeholder="input search text"
                    onSearch={value => this.handleSearch(value)}
                    enterButton
                />
            </Header>
            <Spin tip="拼命加载中..." spinning={this.state.isLoading}>
                <Content style={contentStyle}>
                    {
                        bookList.length?
                            bookList.map(item => (
                                <BookCard/>
                            ))
                            :
                            <div>空空如也</div>
                    }
                </Content>
            </Spin>
            
        </div> )
    }

    handleSearch(value) {
        this.setState({
            isLoading: true
        });
        if (value && value.length) {

        } else {
            console.log('输入不能为空');
        }
    }

    
}
 
export default MSearch;