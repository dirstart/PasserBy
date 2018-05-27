const mongoose = require('mongoose');
const fs = require('fs');
const models = require('./db');

// 格言初始化
// const initMotto = require('./init/initMotto');
// initMotto();


// 书籍初始化
const initBook = require('./init/initBook');
initBook();