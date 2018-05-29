import React, { Component } from 'react';
import './writer-content.less';

import {Popover, Button, Input, Tag} from 'antd';

class WriterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 用户的内容信息
            content: '',
            // 用户的书本信息 - 不包括 ID/字数/内容 等。
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
                    text: '您还没有选择您的类别',
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
                    tip: '您还没有制定您的封面',
                    isEdit: false,
                    canEdit: false,
                    hook: 'cover',
                    color: '#4c7de5'
                }
            }
        }
    }

    componentWillMount() {
        // 从 localStorage 中获取相应的数据
        console.log(localStorage);
        this.initStatus();
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
                                <Input size="small" style={{flex: 1}} defaultValue={attr.text}
                                    onPressEnter={(e) => this.handleCheckBookMsg(e, attr.hook)}
                                />
                                :
                                <span
                                    style={{color: '#bbb'}}
                                    onClick={this.handleChangeBookMsg.bind(this, attr.hook)}
                                >{attr.text ? attr.text : '写个信息吧少年'}</span>
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
            <EditSection attr={bookMsg.cover}></EditSection>
            <EditSection attr={bookMsg.info}></EditSection>
            <Button type="primary" size="small" ghost
                    style={{marginLeft: '200px'}}
                    onClick={this.handleDraft.bind(this)}
            >存入草稿</Button>
            <Button type="primary" size="small"
                    style={{marginLeft: '10px'}}
                    onClick={this.handlePublish.bind(this)}
            >发表文章</Button>
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
                onInput={(e) => this.handleContentChange(e)}
            ></div>
        </div> )
    }

    initStatus() {
        // const bookMsg = JSON.parse(localStorage.getItem('bookMsg'));
    }

    handleChangeBookMsg(hook) {
        const {bookMsg} = this.state;
        if (!bookMsg[hook].canEdit) {
            return;
        }

        // 将其改为编辑状态
        bookMsg[hook].isEdit = !bookMsg[hook].isEdit;
        this.setState(this.state);
    }

    handleCheckBookMsg(e, hook) {
        const value = e.target.value;
        const {bookMsg} = this.state;

        // 修改完毕，state中 转为 查看状态
        bookMsg[hook].isEdit = !bookMsg[hook].isEdit;
        bookMsg[hook].text = value;
        this.setState(this.state);
        // 修改完毕，将缓存(更新)信息存入 localStorage
        this._saveLocal();
    }
    
    _saveLocal() {
        const {bookMsg, content} = this.state;
        const data = {
            title: bookMsg['title'].text,
            author: bookMsg['author'].text,
            cat: bookMsg['cat'].text,
            info: bookMsg['info'].text,
            cover: bookMsg['cover'].text,
        };
        const book = Object.assign({...data}, {content});
        localStorage.setItem('bookMsg', JSON.stringify(book));
        console.log(JSON.parse(localStorage.getItem('bookMsg')));
    }

    handleContentChange(e) {
        const value = e.target.innerHTML;
        this.setState({content: value}, () => this._saveLocal());
    }

    handleDraft() {
        console.log('draft');
    }

    handlePublish() {
        console.log('publish');
    }
}
 
export default WriterContent;