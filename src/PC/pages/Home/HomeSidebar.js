import React, { Component } from 'react';

import {Collapse} from 'antd';
import './home-sidebar.less';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
    background: '#089e82',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-home-sidebar">
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div> )
    }
}
 
export default SideBar;