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
            isLogin: false
        }
    }

    componentWillMount() {
        // 这里先获取一下用户是否登录，如果没有登录让用户先登录
        const userName = JSON.parse(localStorage.getItem('userName'));
        if (!userName) {
            return;
        }

        this.setState({isLogin: true});
        // 通过用户信息获取用户对应的写作信息。
        this.getUserWriteBook();
    }

    render() {
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
                hoverable="true"
                style={{ width: 300, marginTop: '10px' }}
            >
                {
                    this.state.isLogin ? 
                        <div>
                            您已经登录，这里是您的用户信息。
                        </div>
                        :
                        <span>
                            您还没有登录，请您登录后再进行操作。
                        </span>
                }
            </Card>
        </div> )
    }

    async getUserWriteBook() {
        const {data} = await Axios.get('/pc/user/write/book', (req, res) => {

        });
    }
}
 
export default WriterSidebar;