const express = require('express');
const app = express();
const session = require('express-session');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
const secretkey = "秘钥"
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,

}));

app.use(express.json());



app.post('/login', function (req, res) {
    console.log(req.body.user, req.body.password);
    if (req.body.user != "admin" || req.body.password != 123456) {
        return res.send('用户名或密码错误');
    }
    req.session.user = req.body;
    req.session.islogin = true;

    const tokenstr = jwt.sign({ user: req.body.user }, secretkey, { expiresIn: "30s" })

    res.send({
        msg: 'ok登录成功',
        token: tokenstr
    });
});

app.get('/', function (req, res) {
    console.log(req.session.islogin);
    if (!req.session.islogin) {
        return res.send('请先登录');
    }
    res.send({
        user: req.session.user,
        islogin: req.session.islogin,
        msg: 'hello,欢迎登录'
    });
});

app.post('/logout', function (req, res) {
    req.session.destroy();
    res.send('ok,成功退出登录');
});

app.get('/home', function (req, res) {
    res.send(req.body);
});

app.listen(80, function () {
    console.log('服务器已启动...');
});