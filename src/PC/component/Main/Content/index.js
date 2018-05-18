import React, { Component } from 'react';
import ContentTop from './ContentTop/index';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-content">
            <ContentTop></ContentTop>
        </div> )
    }
}
 
export default ContentTop;