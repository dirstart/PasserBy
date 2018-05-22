import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MediaQuery from 'react-responsive';
import MobileIndex from './Mobile/MobileIndex';
import PCIndex from './PC/PCIndex';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import store from './redux/store/index';


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


ReactDOM.render(
    (<Provider store={store}>
        <Index />
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();
