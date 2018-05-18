import React, { Component } from 'react';

import Header from './component/Header';

class PCIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1>testPC</h1>
            <Header></Header>
        </div> )
    }
}
 
export default PCIndex;