const fs = require('fs');
const path = require('path');
//测试文件名的拼接，更改文件名为spec.js，因此才能被测试。
// test('测试文件名', () => {
//     const src = new (require('../testNow/index'))()
//     const res = src.getTestFileNmae('/wx/sum.js')
//     console.log(res)
//     expect(res).toBe('/wx/__test__/sum.spec.js')
// })

//测试代码是否能够生成
// test('测试代码生成', () => {
//     const src = new (require('../index'))();
//     const ret = src.getTestSource('fun', 'class')
//     // console.log(ret, 'llllllllllllllllllllllllllll');
//     expect(ret).toBe(`test('TEST fun',()=>{const fun =require('../class');const ret = fun();expect(ret).toBe('test return');})`
//     )
// })

//把上面两个方法整合到一起
test('集成测试 测试：生成测试代码文件', () => {

    const testPath = __dirname + '/data/__test__';
    // console.log(testPath, fs.existsSync(testPath), 'uuuuuuuuuuuuuuuuuuuuuuuuuuu');

    if (fs.existsSync(testPath)) {

        //rmdirSync删除，remove，/data/__test__目录下的文件和文件夹都会被删除
        //同时__test__文件夹也会被删除。recursive: true 表示递归删除。
        fs.rmdirSync(__dirname + '/data/__test__', { recursive: true });

    }
    //导入方法 
    const src = new (require('../index'))()

    //然后重新写入测试目录,/data下面的文件都会被写入到__test__目录下
    src.getJestSource(__dirname + '\\data')

    // console.log(__dirname + '\\data', 'jjjjjjjjjjjjjjjjjjjjjj');
    // src.getTestFileName('12312.js')
})