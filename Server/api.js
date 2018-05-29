const router = require('express').Router();
const models = require('./db');

router.get('/', (req, res) => {
});

// 1.用户注册
router.post('/user/register', (req, res) => {

    const newData = new models.User({
        userName: req.body.userName,
        userPsd: req.body.userPsd
    });

    // 查重
    models.User.findOne({userName: newData.userName}, (err, user) => {
        if (err) {
            console.log('系统在查重时出现错误', err);
            res.send({
                success: false,
                msg: '系统查重错误'
            })
            return;
        }
        if (user) {
            console.log('用户名已经存在');
            res.send({
                success: false,
                msg: '用户已存在'
            });
            return;
        } else {
            newData.save((err, data) => {
                if (err) {
                    console.log('系统在创建用户时出错', err);
                    res.send({
                        success: false,
                        msg: '系统创建错误'
                    });
                } else {
                    console.log('注册成功');
                    res.send({
                        success: true,
                        msg: '创建成功'
                    })
                }
            })
        }
    });
    



});

// 2.用户登陆
router.get('/user/login', (req, res) => {
    const _user = {
        userName: req.query.userName,
        userPsd: req.query.userPsd
    };
    console.log('后台发送过来的是这个', _user);

    models.User.findOne(_user, (err, user) => {
        if (err) {
            res.send({
                success: false,
                msg: '系统错误'
            });
            return;
        }

        if (!user) {
            console.log('用户不存在');
            res.send({
                success: false,
                msg: '用户不存在'
            });
            return;
        }

        req.session.user = user;
        console.log('登陆成功');
        res.send({
            success: true,
            msg: '登陆成功'
        });
    })
});

// 3.移动端-用户查询数据地点
router.get('/mobile/search/books', (req, res) => {
    console.log('this is search');
    res.render({
        data: {
            name: '123',
            chapter: 3
        }
    });
});


// 4.PC端-获取随机的名言
router.get('/pc/motto', (req, res) => {
    models.Motto.find({}, (error, data) => {
        if (error) {
            res.send({
                success: false,
                mes: '数据库错误'
            })
        } else {
            res.send({
                success: true,
                data: data
            });
        }
    });
});

// 公共库：返回 公共库/发表文章的 书本
router.get('/pc/library', (req, res) => {
    models.Library.find({ID: 1}, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '数据库错误'
            });
        } else {
            res.send({
                success: true,
                data: data
            });
        }
    });
});

// 公共库： 返回 公共库/发表文章的 具体书本的细节
router.get('/pc/library/detail', (req, res) => {
    const params = {ID: 1};
    models.Library.find(params, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '数据库错误'
            })
        } else {
            res.send({
                success: true,
                data: data[0]
            });
        }
    })
})

// 公共库： 根据 种类返回 公共库/发表文章 的具体书本信息
router.get('/pc/library/by-cat', (req, res) => {
    const params = req.query;
    // {type: x, num: y}

    const cat = params.type;
    const num = params.num;

    models.Library.find({cat}, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '数据库错误'
            })
        }
        if (!data[0]) {
            res.send({
                success: false,
                mes: '数据库中没有您要查找的书籍'
            });
            return;
        }

        res.send({
            success: true,
            data: data[0]
        });        
    })
})

// PC端：返回用户的 草稿箱/已发表
router.get('/pc/user/write/book', (req, res) => {
    const userName = req.query.userName;
    models.User.find({userName: userName}, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '数据库错误'
            });
        } else {
            res.send({
                success: true,
                data: data[0]
            })
        }
    })
});

// PC端：用户将文档存入草稿箱
router.post('/pc/user/insert/draft', (req, res) => {
    const recieveData = req.body;
    let isSame = false;
    models.User.find({userName: recieveData.author}, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '老哥，根本没有您的用户'
            })
        } else {
            // 现将数据拼凑完毕后使用更新
            const preArray = data[0].write;
            for (let i = 0; i < preArray.length; i++) {
                console.log(preArray[i].cat, recieveData.cat);
                console.log(preArray[i].title, recieveData.title);
                if (preArray[i].title === recieveData.title && preArray[i].cat === recieveData.cat) {
                    isSame = true;
                }
            }
            
            if (isSame) {
                res.send({
                    success: false,
                    mes: '书本/文章的 名字和类别 不能一起相同'
                });
                return;
            }

            const newData = data[0].write.push(recieveData);
            models.User.update({userName: recieveData.author}, data[0], (err,data) => {
                if (err) {
                    res.send({
                        success: false,
                        mes: '老哥，数据库更新失败'
                    })
                } else {
                    res.send({
                        success: true,
                        mes: '书籍添加成功'
                    });
                }
            })
        }
    });
});

// PC端：用户删除草稿箱中的文档
router.post('/pc/user/delete/draft', (req, res) => {
    const recieveData = req.body;
    console.log(recieveData);


    models.User.find({userName: recieveData.author}, (err, data) => {
        if (err) {
            res.send({
                success: false,
                mes: '老哥，根本没有您的用户'
            })
        } else {
            // 找到我们要删除的那条数据
            let index;
            let preArray = data[0].write;
            for (let i = 0; i < preArray.length; i++) {
                if (preArray[i].title === recieveData.title && preArray[i].cat === recieveData.cat) {
                    index = i;
                }
            }
            // 删除掉那条数据
            preArray.splice(index, 1);
            data[0].write = preArray;

            models.User.update({userName: recieveData.author}, data[0], (err,data) => {
                if (err) {
                    res.send({
                        success: false,
                        mes: '老哥，数据库更新失败'
                    })
                } else {
                    res.send({
                        success: true,
                        mes: '删除成功!'
                    })
                }
            })
        }
    });
})

module.exports = router;