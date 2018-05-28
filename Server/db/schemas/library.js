const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    // 书籍ID
    ID: {
        unique: true,
        type: Number
    },
    // 书名
    title: {
        type: String
    },
    // 作者
    author: {
        type: String
    },
    // 类别
    cat: {
        type: String
    },
    // 介绍
    info: {
        type: String
    },
    // 封面
    cover: {
        type: String
    },
    // 字数
    count: {
        type: Number
    },
    // 好评率
    good: {
        type: Number,
        default: 0
    },
    // 粉丝人数
    fan: {
        type: Number,
        default: 0
    },
    // 书本的内容，有些也许不是章节什么的
    content: {}
});

// 这里需要考虑支持两种方法的查询

// 需要支持根据 书籍类别 的返回
// 需要支持根据 书籍名字 的返回


module.exports = librarySchema;
