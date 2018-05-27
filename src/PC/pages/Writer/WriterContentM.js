import React, { Component } from 'react';
import Marked from 'marked';

import EditBox from './MarkdownContent/EditBox';
import ShowBox from './MarkdownContent/ShowBox';

import './writer-content-m.less';

class WriterContentM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewContent: ''
        }

        this.initStatus();
    }
    render() { 
        const {previewContent} = this.state; 

        return (<div className="pc-writer-main-m">
        <EditBox onChangeContent={this.onContentChange.bind(this)}
            ref={editFather => this.editFather = editFather}
            editMouseOver={this.handleMouseOver.bind(this)}
            editScroll={this.handleScroll.bind(this)} />
        <ShowBox content={previewContent}
            ref={previewFather => this.previewFather = previewFather}
            previewMouseOver={this.handleMouseOver.bind(this)}
            previewScroll={this.handleScroll.bind(this)} />
        </div>)
    }

    // 页面进入的初始化
    initStatus() {
        this.currentIndex = 'edit';
    }

    onContentChange() {

    }
}
 
export default WriterContentM;