const express = require('express');
const app = express();
app.listen(80, () => {
    console.log('服务器启动成功');
})
app.get('/home/:id', (req, res) => {
    //静态用“？”问号加拼接的键值对，不过是用等于号的赋值方式表达，如name='张三'。
    const aa = req.query;
   //动态是直接在“/”斜杆后面传值，键已经在路由中定义了，如“/home/:id”。
    const bb = req.params;
    res.send('hello 你好世界' + bb.id + aa.id);
    console.log(bb);
})
app.use(express.json());
app.post('/home', (req, res) => {

    console.log(req.body);
    res.send('hello 你好世界,post',)
})