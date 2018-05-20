import React, { Component } from 'react';

import {Row, Col} from 'antd';

import {Switch, Route} from 'react-router-dom';

import MainLeft from './Left/index';

import HomeSidebar from '../../pages/Home/HomeSidebar';
import HomeContent from '../../pages/Home/HomeContent';
import ReaderSidebar from '../../pages/Reader/ReaderSidebar';
import ReaderContent from '../../pages/Reader/ReaderContent';
import WriterSiderbar from '../../pages/Writer/WriterSidebar';
import WriterContent from '../../pages/Writer/WriterContent';



import './index.less';

class PCMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-main-content">
            <Row>
                <Col span={2}></Col>
                <Col span={4}>
                    <MainLeft></MainLeft>
                </Col>
                <Col span={12}>
                    <Switch>
                        <Route exact path="/" component={HomeContent}></Route>
                        <Route path="/p_home" component={HomeContent}></Route>
                        <Route path="/p_reader" component={ReaderContent}></Route>
                        <Route path="/p_writer" component={WriterContent}></Route>
                    </Switch>                    
                </Col>
                <Col span={4}>
                    <Switch>
                        <Route exact path="/" component={HomeSidebar}></Route>
                        <Route path="/p_home" component={HomeSidebar}></Route>
                        <Route path="/p_reader" component={ReaderSidebar}></Route>
                        <Route path="/p_writer" component={WriterSiderbar}></Route>
                    </Switch>
                </Col>
                <Col span={2}></Col>
            </Row>
        </div> )
    }
}
 
export default PCMain;