const fs = require('fs');
const models = require('../db');

// 将自动化函数装好
const initBookSingle = (bookData, index) => {
    let bookTxt = fs.readFileSync(`./books/${index}.txt`, "utf-8");
    bookTxt = handle(bookTxt);
    const bookLen = bookTxt.trim().length;

    const okData = Object.assign(bookData, {count: bookLen}, {content: bookTxt});
    const insertData = new models.Library(okData);
    
    insertData.save((err, data) => {
        if (err) {
            console.log('数据库初始化书籍', index, '错误：', err);
        } else {
            console.log('数据库初始化书籍', index, '成功！');
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

const bookArray = [{
    ID: 1,
    title: '解忧杂货店',
    author: '东野圭吾',
    cat: '治愈',
    info: '很温暖的一本书',
    cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527622723534&di=3178c7999d2f001a1e6d32b6deaf4297&imgtype=0&src=http%3A%2F%2Fimg.ishuo.cn%2F1701%2F1484891539.jpg'
}, {
    ID: 2,
    title: '三体',
    author: '刘慈欣',
    cat: '科幻',
    info: '很宏大的世界观！厉害！',
    cover: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4139997952,1229290977&fm=27&gp=0.jpg'
}, {
    ID: 3,
    title: '海底两万里',
    author: '凡尔纳',
    cat: '科幻',
    info: '好久以前的剧情了，不过现在纵使再看一遍也会觉得精彩吧！',
    cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527624708800&di=f83c462aca55332955a7a0a4cfb8b4d5&imgtype=0&src=http%3A%2F%2Fpic.qydm.net%2FUploads%2Fvod%2F2015-01-06%2Fhdlwl.jpg'
}, {
    ID: 4,
    title: '北京折叠',
    author: '郝景芳',
    cat: '科幻',
    info: '未来贫富差距无限拉大，人类阶层差异化剧烈，人类的工作生活时间按小时划分。',
    cover: 'http://upload.mnw.cn/2016/0428/1461810794177.jpg'
}, {
    ID: 5,
    title: '小王子',
    author: '一个浪漫的飞行员',
    cat: '治愈',
    info: '小王子问玫瑰为什么带着刺，天真的王子完全不知道...',
    cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1852317409,40259824&fm=27&gp=0.jpg'
}, {
    ID: 6,
    title: '小红帽',
    author: '格林兄弟',
    cat: '治愈',
    info: '儿时的童话',
    cover: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=f4480471adc379317d68812fd3ffd078/b90e7bec54e736d1a3964a7f99504fc2d46269c4.jpg'
}, {
    ID: 7,
    title: '三国演义',
    author: '罗贯中',
    cat: '名著',
    info: '看刘关张桃园三结义，打天下！',
    cover: 'http://image.xiaoshuotxt.org/d/file/dangdai/86722ad04b55efc1100577cf8af46552.jpg'
}, {
    ID: 8,
    title: '水浒传',
    author: '施耐庵',
    cat: '名著',
    info: '梁山好汉，结识松江打天下！',
    cover: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3e940701bc003af34dbadb660d11a161/d50735fae6cd7b899616dd8b052442a7d9330ebb.jpg'
}, {
    ID: 9,
    title: '红楼梦',
    author: '曹雪芹',
    cat: '名著',
    info: '贾宝玉',
    cover: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c4d23f3dc08065387beaa315afe6c679/d01373f082025aaff3cec4b8f1edab64024f1ac0.jpg'
}];

const initBook = () => {
    for (let i = 0; i < bookArray.length; i++) {
        initBookSingle(bookArray[i], i);
    }
}



module.exports = initBook;