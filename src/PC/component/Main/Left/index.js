import React, { Component } from 'react';

import {Card, Tag, Timeline, Divider} from 'antd';
import './index.less';

const TagGroup = (
    <div>
        <Tag color="magenta">星期六</Tag>
        <Tag color="cyan">五月20日</Tag>
    </div>
);

const TagGroup2 = (
    <div>
        <Tag color="#089e8a">
            创造是一条升华的路.
        </Tag>
    </div>
)

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
                <p style={{margin: 0}}>{state.motto}</p>
            </Card>
            <Divider />
            <Card title={TagGroup2}>
                <Timeline>
                    <Timeline.Item color="green">2018-01-01加入</Timeline.Item>
                    <Timeline.Item color="green">创造</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>欣赏这个世界。</p>
                        <p>看了《三重门》</p>
                        <p>看了《小王子》</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>写了《三体》</p>
                        <p>写了《球状闪电》</p>
                        <p>写了《北京折叠》</p>
                    </Timeline.Item>
                </Timeline>
            </Card>
        </div> )
    }
}
 
export default MainLeft;