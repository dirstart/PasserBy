import React, { Component } from 'react';
import './writer-content.less';

import {Popover, Button, Input, Tag} from 'antd';

class WriterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 当前保存的用户的编辑信息
            nowMsg: {

            },
            bookMsg: {
                ID: {
                    isShow: false,
                    text: '',
                    tip: 'ID',
                    isEdit: false,
                    hook: 'ID'
                },
                author: {
                    isShow: true,
                    text: '推理世界',
                    tip: '您的账户名',
                    canEdit: false,
                    isEdit: false,
                    hook: 'author',
                    color: 'yellow'
                },
                title: {
                    isShow: true,
                    text: '一个好的名字是一个好的开始',
                    tip: '修改您的文章/书名',
                    canEdit: true,
                    isEdit: false,
                    hook: 'title',
                    color: '#089e8a'
                },
                cat: {
                    isShow: true,
                    text: '您的类别',
                    tip: '您的书籍类别',
                    canEdit: true,
                    isEdit: false,
                    hook: 'cat',
                    color: '#f63'
                },
                info: {
                    isShow: true,
                    text: '您的书籍介绍',
                    tip: '请用一句话介绍您的书籍',
                    isEdit: false,
                    canEdit: true,
                    hook: 'info',
                    color: '#900012'
                },
                cover: {
                    isShow: true,
                    text: '您的书籍封面',
                    tip: '您的书籍封面',
                    isEdit: false,
                    canEdit: false,
                    hook: 'cover',
                    color: '#4c7de5'
                }
            }
        }
    }
    render() {
        const {bookMsg} = this.state;
        const EditSection = ({attr}) => {
            return (<section>
                {
                    attr.isShow ? 
                    <div style={{display: 'flex', marginBottom: '10px'}}>
                        <Tag color={attr.color}>{attr.tip}</Tag>
                        {
                            attr.isEdit ?
                                <Input size="small" style={{flex: 1}} placeholder="123" />
                                :
                                <span
                                    style={{color: '#bbb'}}
                                    onClick={this.changeBookEditStatus.bind(this, attr.hook)}
                                >{attr.text}</span>
                        }
                    </div>
                    :
                    null
                }
            </section>)
        }
        const popMes = (<div>
            <EditSection attr={bookMsg.author}></EditSection>
            <EditSection attr={bookMsg.title}></EditSection>
            <EditSection attr={bookMsg.cat}></EditSection>
            <EditSection attr={bookMsg.info}></EditSection>
            <EditSection attr={bookMsg.cover}></EditSection>
            {/* <h5>字数：这个在数据库上传的时候统计？</h5>
            <h5>好评率：这个不是用户自己决定的</h5>
            <h5>粉丝人数； 这个不是用户自己决定的</h5>
            <h5>书本内容：这个就是我们的章节部分</h5>
            <h5>书籍ID：这个在插入的时候想办法</h5> */}
        </div>);

        return ( <div className="pc-writer-main">
            <div className="pc-writer-toolbar-wrap">
                <Popover content={popMes} placement="bottom">
                    <Button  type="primary"
                             ghost
                             className="pc-writer-pop-title">
                             {bookMsg.title.text}
                    </Button>
                </Popover>
                <div className="pc-writer-toolbar">
                    这里是一系列的工具栏.
                </div>
            </div>
            <div className="pc-writer-edit"
                 contentEditable="plaintext-only"
            ></div>
        </div> )
    }

    changeBookEditStatus(hook) {
        const {bookMsg} = this.state;
        if (!bookMsg[hook].canEdit) {
            return;
        }

        bookMsg[hook].isEdit = !bookMsg[hook].isEdit;
        this.setState(this.state);
    }
}
 
export default WriterContent;