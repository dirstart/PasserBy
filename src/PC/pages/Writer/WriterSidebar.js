import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, Avatar, Tag} from 'antd';
import './writer-sidebar.less';
import { Button } from 'antd/lib/radio';

const {Meta} = Card;

class WriterSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            writeBook: [],
            publickBook: []
        }
    }

    componentWillMount() {
        // 这里先获取一下用户是否登录，如果没有登录让用户先登录
        const userName = JSON.parse(localStorage.getItem('userName'));
        if (!userName) {
            return;
        }

        this.setState({isLogin: true});
        // 通过用户信息获取用户的 草稿箱/已发表
        this.getUserWriteBook(userName);
    }

    render() {
        const {writeBook, publickBook} = this.state;
        return ( <div className="pc-writer-sidebar">
            <Card
                hoverable="true"
                style={{ width: 300 }}
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
                style={{ width: 300}}
            >
                {
                    this.state.isLogin ? 
                        <div>
                            {
                                writeBook.length ?
                                writeBook.map((book, index) => {
                                    <div key={index}>
                                        您写过的书 {book.name}
                                    </div>
                                }):<div>您尚未开始您的旅途。</div>
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
                style={{width: 300}}
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
}
 
export default WriterSidebar;