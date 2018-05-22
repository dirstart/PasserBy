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
    console.log(req);
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
})



module.exports = router;