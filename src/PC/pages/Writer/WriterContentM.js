import React, { Component } from 'react';
import marked from 'marked';

import EditBox from './MarkdownContent/EditBox';
import ShowBox from './MarkdownContent/ShowBox';

import './writer-content-m.less';

const textStyle = {
    textShadow: '5px 5px 5px #FF0000'
}

class WriterContentM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewContent: ''
        }

        this.initStatus();
    }

    componentDidMount() {
        this.setScrollValue();
    }

    render() { 
        const {previewContent} = this.state; 

        return (<div className="pc-writer-main-m">
            <EditBox onChangeContent={this.onContentChange.bind(this)}
                style={textStyle}
                ref={editFather => this.editFather = editFather}
                editMouseOver={this.handleMouseOver.bind(this)}
                editScroll={this.handleScroll.bind(this)} />
            <div className="pc-writer-m-toolbar">
                213
            </div>
            <ShowBox content={previewContent}
                ref={previewFather => this.previewFather = previewFather}
                previewMouseOver={this.handleMouseOver.bind(this)}
                previewScroll={this.handleScroll.bind(this)} />
        </div>)
    }

    // 页面初始化
    initStatus() {
        this.currentTabIndex = 'edit';
        this.hasContentChange = false;
        this.scale = 1;
    }

    handleScroll() {
        const previewWrap = this.previewFather.previewWrap.current;
        const editWrap = this.editFather.editWrap.current;
        this.hasContentChange && this.setScrollValue();

        if (this.currentTabIndex === 'edit') {
            previewWrap.scrollTop = editWrap.scrollTop * this.scale;      
        } else if (this.currentTabIndex === 'preview') {
            editWrap.scrollTop = previewWrap.scrollTop / this.scale;
        }
    }
    
    handleMouseOver(str) {
        this.currentTabIndex = str;
    }

    onContentChange(e) {
        !this.hasContentChange && (this.hasContentChange = true);
        this.setState({
            previewContent: marked(e.target.innerText)
        });
    }

    setScrollValue() {
        // 看下滚动条比例的差距
        const pWrapH = this.previewFather.previewWrap.current.offsetHeight;
        const pBoxH = this.previewFather.previewBox.current.offsetHeight;
        const eWrapH = this.editFather.editWrap.current.offsetHeight;
        const eBoxH = this.editFather.editBox.current.offsetHeight;
    
        const pDiffer = pWrapH - pBoxH;
        const eDiffer = eWrapH - eBoxH;
        this.scale = pDiffer / eDiffer;
        this.hasContentChange = false;
      }
}
 
export default WriterContentM;