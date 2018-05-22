import React, { Component } from 'react';
import ContentTop from './Content/ContentTop';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-home-content">
            <ContentTop></ContentTop>
        </div> )
    }
}
 
export default Content;