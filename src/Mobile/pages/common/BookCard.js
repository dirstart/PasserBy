import React, { Component } from 'react';
import './book-card.less';


class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() { 
        return ( <div className="m-book-card">
            <img src={this.props.book.cover} className="m-book-card-img" alt=""/>
            <div className="m-book-card-detail">
                <h4 className="m-book-card-title">{this.props.book.title}</h4>
                <div className="m-book-card-text">
                    <span className="m-boo-card-fan">{this.props.book.fan}人在看 | </span>
                    <span className="m-boo-card-good">{this.props.book.good}人收藏 | </span>
                    <span className="m-boo-card-author">{this.props.book.author}著</span>
                </div>
            </div>
        </div> )
    }
}
 
export default BookCard;