import React, { Component } from 'react';

import {Carousel} from 'antd';
import './index.less';

class ContentTop extends Component {
    render() { 
        return ( <div className="pc-home-top-carousel">
            <Carousel autoplay>
                <div className="carousel-wrap">
                    <img className="carousel-img" src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt=""/>
                </div>
                <div className="carousel-wrap">
                    <img className="carousel-img" src={`${process.env.PUBLIC_URL}/img/2.jpg`} alt=""/>
                </div>
                <div className="carousel-wrap">
                    <img className="carousel-img" src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt=""/>
                </div>
                <div className="carousel-wrap">
                    <img className="carousel-img" src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt=""/>
                </div>
            </Carousel>
        </div> )
    }
}
 
export default ContentTop;