
test('TEST time', done => {
        const { callback } = require('../time.js');
        // const ret = callback();
        callback();
        setTimeout(done, 5000);
        //expect(ret).toBe('test return');
}, 6000)