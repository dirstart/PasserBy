import React, { Component } from 'react';

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <a href="/" className="pc-header-logo">
            <i className="logo-image iconfont icon-leaf"></i>
            <span className="logo-text">Passer-By</span>
        </a> )
    }
}
 
export default Avatar;