import React, { Component } from 'react';
import ContentTop from './Content/ContentTop';
import ContentCenter from './Content/ContentCenter';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="pc-home-content">
            <ContentTop></ContentTop>
            <ContentCenter></ContentCenter>
        </div> )
    }
}
 
export default Content;