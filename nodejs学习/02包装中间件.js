const express = require('express');

const app = express();
//全局的中间件，用于解析表单数据
const query = require('querystring');

app.use((req, res, next) => {

    let str = '';
    req.on('data', chunk => {
        str += chunk;
    });

    req.on('end', () => {
        const body = query.parse(str);
        req.body = body; 
        next();
    });
   
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(80, () => {
    console.log('服务器启动成功');
});