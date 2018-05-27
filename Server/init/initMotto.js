//在这里进行格言的初始化

const models = require('../db');

const initMotto = () => {

    const soldMotto = [
        "真理惟一可靠的标准就是永远自相符合。 —— 欧文",
        "时间是一切财富中最宝贵的财富。 —— 德奥弗拉斯多",
        "生活有度，人生添寿。 —— 书摘",
        "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。 —— 斯里兰卡",
        "过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克",
        "若有恒,何必三更眠五更起 ；最无益,一日曝十日寒。"
    ];
    let mottoLen = soldMotto.length;


    for (let i = 0; i < mottoLen; i++) {
        const newData = new models.Motto({
            content: soldMotto[i]
        });
        newData.save((err, data) => {
            if (err) {
                console.log('系统创建用户的时候出错', err);
            } else {
                console.log('插入格言成功');
            }
        })
    }
}
module.exports = initMotto;
