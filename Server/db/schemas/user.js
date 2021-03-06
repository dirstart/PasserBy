const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    unipue: true,
    type: String
  },
  userPsd: String,
  // 记录用户要看的书
  collect: Array,
  // 记录用户写下的草稿
  write: {
    type: Array,
    default: []
  },
  // 记录用户发表的文章
  publish: {
    type: Array,
    default: []
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

userSchema.pre('save', (next) => {
  // 这里主要处理一些时间
  next();
});

// 静态方法，为了Model层能够使用
userSchema.static = {
  findById: (id, callback) => {
    return this.findOne({ _id: id }).exec(callback);
  }
};

module.exports = userSchema;
