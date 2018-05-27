const fs = require('fs');
const models = require('../db');

const initBook = () => {

    let bookTextOne = fs.readFileSync("./books/1.txt", "utf-8");
    bookTextOne = handle(bookTextOne);

    console.log(bookTextOne);
    const insertData = {
        
    }
}

const handle = str => {
    const reg1 = /\\r/,
          reg2 = /\\n/;
    
    str = str.replace(reg1, "\\r");
    str = str.replace(reg2, "\\n");

    return str;
};



module.exports = initBook;