function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// 调用函数，假设我们需要一个长度为10的随机字符串
let randomString = generateRandomString(32);
console.log(randomString, Math.random());
module.exports = { generateRandomString } 