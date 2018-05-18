import React, { Component } from 'react';

import {Card, Tag} from 'antd';
import './index.less';

const TagGroup = (
    <div>
        <Tag color="magenta">星期六</Tag>
        <Tag color="cyan">五月20日</Tag>
    </div>
);

class MainLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            motto: "一日之际在于晨。"
         }
    }
    render() {
        const state = this.state;
        return ( <div className="pc-main-left">
            <Card title={TagGroup} bordered={true}>
                <p>{state.motto}</p>
            </Card>
        </div> )
    }
}
 
export default MainLeft;