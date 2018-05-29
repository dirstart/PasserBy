import React, { Component } from 'react';
import CatLine from './CatLine';

class ContentCenter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            catArray: [{
                cat: "治愈",
                text: "温馨治愈",
                num: 3
            }, {
                cat: "科幻",
                text: "科幻魔法",
                num: 3
            }, {
                cat: "名著",
                text: "世界名著",
                num: 3
            }]
        }
    }
    render() { 
        return ( <div className="pc-home-center-recommend">
            {
                this.state.catArray.map((item, index) => (
                    <div className="pc-home-cat-line-wrap" key={index}>
                        <header className="pc-home-cat-line-header">{item.text}</header>
                        <CatLine className="pc-home-cat-item" cat={item}></CatLine>
                    </div>
                ))
            }
        </div> )
    }
}
 
export default ContentCenter;