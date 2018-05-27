const User = require('./db/models/user');
const Motto = require('./db/models/motto');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/passerBy');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => {
  console.log('Mongo connection error');
});
db.once('open', () => {
  console.log('Mongo connection successed');
});

// 将模型集中定义在这里，这里没有实体化 Model，所以并不是 Entity
const Models = {
  User: User,
  Motto: Motto
};

module.exports = Models;