const mongoose = require('mongoose');

const libSchema = new mongoose.Schema({
    // 书籍ID
    ID: {
        unique: true,
        type: String
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
        type: Number
    },
    // 粉丝人数
    fan: {
        type: Number
    },
    // 书本的内容，有些也许不是章节什么的
    content: {}
});


module.exports = libSchema;
