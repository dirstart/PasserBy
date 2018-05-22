import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Layout, Icon, Input, Spin} from 'antd';

import BookCard from '../common/BookCard';
import Template from '../common/Template';
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
            searchValue: '',
            bookList: []
         }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: false,
            searchValue: nextProps.fetchBookList.name,
            bookList: nextProps.fetchBookList.books
        });
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
                    placeholder="请输入您要搜索的书名"
                    onChange={this.handleChange.bind(this)}
                    onPressEnter={this.handleSearch.bind(this)}
                    enterButton
                />
            </Header>
            <Spin tip="书籍搜索中..." spinning={this.state.isLoading}>
                <Content style={contentStyle}>
                    {
                        bookList && bookList.length?
                            bookList.map((item, index) => (
                                <BookCard key={index} />
                            ))
                            :
                            <div>空空如也</div>
                    }
                </Content>
            </Spin>
            
        </div> )
    }

    handleChange(e) {
        this.setState({ searchValue: e.target.value});
    }

    handleSearch() {
        const {searchValue} = this.state;
        if (searchValue && searchValue.length) {
            this.setState({isLoading: true});
            this.props.getBookList(searchValue);
        } else {
            console.log('输入不能为空');
        }
    }
}
 
export default Template(MSearch);