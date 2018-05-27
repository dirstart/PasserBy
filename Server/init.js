const models = require('./db');



// 这里是创建 实体的地方
// const newData = new models.User({
//     userName: req.body.userName,
//     userPsd: req.body.userPsd
// });

// 这里是 实体化保存的地方。
// newData.save((err, data) => {
//     if (err) {
//         console.log('系统在创建用户时出错', err);
//         res.send({
//             success: false,
//             msg: '系统创建错误'
//         });
//     } else {
//         console.log('注册成功');
//         res.send({
//             success: true,
//             msg: '创建成功'
//         })
//     }
// })