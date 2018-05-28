import React, { Component } from 'react';
import CatLine from './CatLine';

class ContentCenter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            catArray: [{
                cat: "zhiyu",
                num: 3
            }, {
                cat: "xuanhuan",
                num: 3
            }, {
                cat: "mingzhu",
                num: 3
            }]
        }
    }
    render() { 
        return ( <div className="pc-home-center-recommend">
            {
                this.state.catArray.map((item, index) => (
                    <div className="pc-home-cat-line-wrap">
                        <header className="pc-home-cat-line-header">{item.cat}</header>
                        <CatLine className="pc-home-cat-item" cat={item} key={index}></CatLine>
                    </div>
                ))
            }
        </div> )
    }
}
 
export default ContentCenter;