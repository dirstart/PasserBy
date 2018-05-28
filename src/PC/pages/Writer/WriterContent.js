import React, { Component } from 'react';
import './writer-content.less';

import {Popover, Button} from 'antd';

class WriterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const popMes = (<div>
            <h5>书籍ID：这个在插入的时候想办法</h5>
            <h5>书名：这个由作者定</h5>
            <h5>作者： 这个是固定的   已解决.</h5>
            <h5>类别：这个下拉框可选</h5>
            <h5>介绍：让作者介绍一个</h5>
            <h5>封面：让用户自己上传，否则就默认一些图片</h5>
            <h5>字数：这个在数据库上传的时候统计？</h5>
            <h5>好评率：这个不是用户自己决定的</h5>
            <h5>粉丝人数； 这个不是用户自己决定的</h5>
            <h5>书本内容：这个就是我们的章节部分</h5>
        </div>);

        return ( <div className="pc-writer-main">
            <div className="pc-writer-toolbar-wrap">
                <Popover content={popMes} placement="bottom">
                    <Button  type="primary"
                             ghost
                             className="pc-writer-pop-title">好的名字，好的开始
                    </Button>
                </Popover>
                <div className="pc-writer-toolbar">
                    这里是一系列的工具栏.
                </div>
            </div>
            <div className="pc-writer-edit"
                 contentEditable="plaintext-only"
            >
                这里是编辑的地方
            </div>
        </div> )
    }
}
 
export default WriterContent;