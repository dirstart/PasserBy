const User = require('./db/models/user');
const Motto = require('./db/models/motto');
const Library = require('./db/models/library');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/passerBy');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => {
  console.log('数据库连接错误');
});
db.once('open', () => {
  console.log('数据库的第一次连接');
});

db.once('close', () => {
  console.log('关闭了数据库');
})

// 将模型集中定义在这里，这里没有实体化 Model，所以并不是 Entity
const Models = {
  User: User,
  Motto: Motto,
  Library: Library
};

module.exports = Models;