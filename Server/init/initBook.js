const fs = require('fs');
const models = require('../db');

const initBook = () => {

    let bookTextOne = fs.readFileSync("./books/1.txt", "utf-8");
    bookTextOne = handle(bookTextOne);
    const bookOneLen = bookTextOne.trim().length;
    console.log(bookOneLen);

    const insertDataOne = new models.Library({
        ID: 1,
        title: '解忧杂货店',
        author: '东野圭吾',
        cat: '治愈',
        info: '很温暖的一本书',
        cover: '暂时没有',
        count: bookOneLen,
        content: bookTextOne
    });

    insertDataOne.save((err, data) => {
        if (err) {
            console.log('数据库初始化书籍错误');
        } else {
            console.log('数据库初始化书籍成功')
        }
    })
}

const handle = str => {
    const reg1 = /\\r/,
          reg2 = /\\n/;
    
    str = str.replace(reg1, "\\r");
    str = str.replace(reg2, "\\n");

    return str;
};



module.exports = initBook;