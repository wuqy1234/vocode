function logTime(msg = '时间：') {
    console.log(msg, new Date(Date.now()))
}

const promise = (msg = '时间：') => new Promise((resolve, reject) => {
    setTimeout(() => {
        logTime(msg)
        resolve('中国时间 2')
    }, 1000)
})


exports.callback = () => {
    promise('中国时间 1')
        //在then中传入(e => logTime(e))和logTime参数，
        //将会得到resolve('结果')的结果，即小括号里的参数会直接传给then中的回调函数。
        .then(e => logTime(e))
        .then(e => promise('中国时间 3'))
}
logTime('中国时间 0')