import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

import MobileIndex from './MobileIndex';
import PCIndex from './PCIndex';

import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <MediaQuery query='(min-device-width:1224px)'>
                <PCIndex></PCIndex>
            </MediaQuery>
            <MediaQuery query='(max-device-width:1224px)'>
                <MobileIndex></MobileIndex>
            </MediaQuery>
        </div> )
    }
}
 
export default Index;


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
