import React, { Component } from 'react';

import Header from './component/Header/index';
import PCMain from './component/Main/index';

class PCIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Header></Header>
            <PCMain></PCMain>
        </div> )
    }
}
 
export default PCIndex;