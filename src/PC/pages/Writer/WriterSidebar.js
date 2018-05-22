import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, Avatar, Tag} from 'antd';
import './writer-sidebar.less';

const {Meta} = Card;

class WriterSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( <div className="pc-writer-sidebar">
            <Card
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
        </div> )
    }
}
 
export default WriterSidebar;