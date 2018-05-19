import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';

import Header from './component/Header/index';
import PCMain from './component/Main/index';

class PCIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <BrowserRouter>
            <div>
                <Header></Header>
                <PCMain></PCMain>
            </div>
        </BrowserRouter>)
    }
}
 
export default PCIndex;