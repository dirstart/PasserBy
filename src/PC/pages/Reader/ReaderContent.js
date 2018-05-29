import React, { Component } from 'react';
import Axios from 'axios';
import './index.less';

class ReaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookContet: '这里没有文字.'
        }
    }

    componentDidMount() {
        const search = window.location.search.split('?')[1];
        const ID = (search && search.length || false) ? search.split('=')[1] : 'no';
        this.initStatus(ID);
    }

    render() { 
        return ( <div className="pc-reader-main">
            <div className="pc-reader-book-wrap">
                <div className="pc-reader-book-content">
                    {
                        this.state.bookContet
                    }
                </div>
            </div>
        </div> )
    }

    async initStatus(ID) {
        console.log('id', ID);
        const {data} = await Axios.get('/pc/library/by-id', {
            params: {
                ID: ID
            }
        });
        
        if (data.success) {
            const content = data.data.content
            this.setState({
                bookContet: content
            });
        }
    }
}
 
export default ReaderContent;