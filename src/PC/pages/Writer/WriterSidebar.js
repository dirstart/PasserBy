import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, Avatar, Tag} from 'antd';
import './writer-sidebar.less';

const {Meta} = Card;

class WriterSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            writeBook: [],
            publickBook: [],
            userName: ''
        }
    }

    componentWillMount() {
        // 这里先获取一下用户是否登录，如果没有登录让用户先登录
        const userName = JSON.parse(localStorage.getItem('userName'));
        if (!userName) {
            return;
        }

        this.setState({isLogin: true, userName});
        // 通过用户信息获取用户的 草稿箱/已发表
        this.getUserWriteBook(userName);
    }

    render() {
        const {writeBook, publickBook} = this.state;
        return ( <div className="pc-writer-sidebar">
            <Card
                hoverable="true"
                style={{ width: 360 }}
                cover={<img alt="example" src="https://raw.githubusercontent.com/dirstart/image_bed/master/graduate2.jpg" />}
                actions={[
                    <Link to="/p_writer">富文本</Link>,
                    <Link to="/p_writer/markdown">Markdown</Link>
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Tag color="green">Tip - 提供两种文本格式</Tag>}
                description="点击我下面的按钮"
                />
            </Card>
            <Card
                className="pc-writer-sidebar-draft"
                title="您的草稿箱"
                hoverable="true"
                style={{ width: 360, maxHeight: 200, overflowY: 'scroll'}}
            >
                {
                    this.state.isLogin ? 
                        <div>
                            {
                                writeBook.length ?
                                writeBook.map((book, index, data) => (
                                    <div key={index} style={{marginBottom: '10px'}}>
                                        <span className="pc-pre-circle"></span>
                                        <Tag color="#903"
                                            style={{marginRight: '5px',
                                            textAlign: 'center',
                                            minWidth: '100px'}}>类别：{book.cat}</Tag>
                                        <Tag color="blue"
                                            style={{minWidth: '100px', textAlign: 'center'}}
                                        >书名：{book.title}</Tag>
                                        <Tag color="red"
                                            onClick={this.handleDelete.bind(this, data[index])}
                                        >删除</Tag>
                                    </div>
                                )):<div>您尚未开始您的旅途。</div>
                            }
                        </div>
                        :
                        <span>
                            您还没有登录，请您登录后再进行操作。
                        </span>
                }
            </Card>
            <Card
                className="pc-writer-sidebar-publish"
                title="您发表过的文章"
                hoverable="true"
                style={{ width: 360, maxHeight: 200, overflowY: 'scroll',marginBottom: '30px'}}
            >
                {
                    publickBook.length ?
                        publickBook.map((book, index) => (
                            <div key={index}>
                                <span>书名</span>
                                <span>{book.name}</span>
                            </div>
                        )):
                        <span>用户还未发表任何文章</span>
                }
            </Card>
        </div> )
    }

    async getUserWriteBook(userName) {
        const {data} = await Axios.get('/pc/user/write/book', {
            params: {userName}
        });
        this.setState({
            writeBook: data.data.write,
            publickBook: data.data.publish
        });
    }

    async handleDelete(book) {
        console.log('删除操作', book);
        const {data} = await Axios.post('/pc/user/delete/draft', book);
        // console.log(data);
    }
}
 
export default WriterSidebar;