import React, { Component } from 'react';

import {Collapse, Card} from 'antd';
const Panel = Collapse.Panel;

const text = `
    欢迎来到我的阅读器，下方是一些工具栏
`;

const customPanelStyle = {
    background: '#089e82',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};


class ReaderSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="您可以调节字体大小" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="您可以切换白天黑夜模式" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="您在这里可以查看章节" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
            </Collapse>
            <Card>
                123
            </Card>
        </div> )
    }
}
 
export default ReaderSidebar;