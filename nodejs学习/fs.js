const fs = require('fs');
fs.readFile('./fs/1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let bb = data.split(' ');
    let cc = [];
    bb.forEach(item => {
        cc.push(item.replace('=', ':'))
    });
    let dd = cc.join('\n\r');
    fs.writeFile('./fs/2.txt', dd, (err) => {
        if (err) throw err;
        console.log("写入成功");
    });
});

