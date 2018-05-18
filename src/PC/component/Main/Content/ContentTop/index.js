import React, { Component } from 'react';

import {Carousel} from 'antd';
import './index.less';

class ContentTop extends Component {
    render() { 
        return ( <div>
            <Carousel autoplay>
                <div className="test-carousel"><h3>1</h3></div>
                <div className="test-carousel"><h3>2</h3></div>
                <div className="test-carousel"><h3>3</h3></div>
                <div className="test-carousel"><h3>4</h3></div>
            </Carousel>
        </div> )
    }
}
 
export default ContentTop;