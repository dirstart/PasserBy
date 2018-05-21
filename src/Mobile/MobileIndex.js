import React, { Component } from 'react';

import MHeader from './component/MHeader/index';
import MMain from './component/MMain/index';

import {BrowserRouter} from 'react-router-dom';

import '../common/css/antd.less';

class MobileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <BrowserRouter>
            <div>
                <MHeader></MHeader>
                <MMain></MMain>
            </div>
        </BrowserRouter> )
    }
}
 
export default MobileIndex;