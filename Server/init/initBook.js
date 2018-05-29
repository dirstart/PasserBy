const fs = require('fs');
const models = require('../db');

const initBook = () => {

    let bookTextOne = fs.readFileSync("./books/1.txt", "utf-8");
    bookTextOne = handle(bookTextOne);
    const bookOneLen = bookTextOne.trim().length;

    const insertDataOne = new models.Library({
        ID: 1,
        title: '解忧杂货店',
        author: '东野圭吾',
        cat: '治愈',
        info: '很温暖的一本书',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527622723534&di=3178c7999d2f001a1e6d32b6deaf4297&imgtype=0&src=http%3A%2F%2Fimg.ishuo.cn%2F1701%2F1484891539.jpg',
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