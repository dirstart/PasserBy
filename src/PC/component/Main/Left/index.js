import React, { Component } from 'react';
import Axios from 'axios';

import {Card, Tag, Timeline, Divider} from 'antd';
import './index.less';

const myDate = new Date();
const weekArray = ["日", "一", "二", "三", "四", "五", "六"];

const TagGroup = (
    <div>
        <Tag color="magenta">星期{weekArray[myDate.getDay()]}</Tag>
        <Tag color="cyan">{myDate.getMonth() + 1}月{myDate.getDate()}日</Tag>
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
            motto: '若有恒,何必三更眠五更起;最无益,一日曝十日寒。'
         }
    }

    componentWillMount() {
        this.getMotto();
    }

    async getMotto() {
        const {data} = await Axios.get('/pc/motto');
        if (!data.success) {
            return;
        };
        const index = Math.floor(Math.random() * data.data.length);
        const selectedMotto = data.data[index];
        this.setState({
            motto: selectedMotto.content
        });
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