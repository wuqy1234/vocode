const path = require('path');
const fs = require('fs');
module.exports = class testNow {
    // 测试文件名

    /**
     * 生成测试文件的名称。
     * 该函数接受一个文件名作为输入，然后返回一个新文件名，
     * 这个新文件名是在原始文件名的基础上添加了`.spec`前缀，
     * 用于标识这是一个测试文件。新文件名的目录被设置为原始文件所在目录的`__test__`子目录。
     * 
     * @param {string} filename - 原始文件的完整路径名。param:参数。
     * @return {string} 返回修改后的测试文件的完整路径名。
     */
    getTestFileName(filename) {
        // 获取文件所在目录
        const dirName = path.dirname(filename)
        // console.log(dirName, 'wwwwwwwwwwwwwwwwww');

        // 获取文件的基本名称（不包括目录和扩展名）
        const baseName = path.basename(filename)

        // 获取文件的扩展名
        const extName = path.extname(filename)

        // 生成测试文件的名称，通过在基本名称后添加`.spec`和原始扩展名来实现
        const testName = baseName.replace(extName, `.spec${extName}`)

        // 格式化路径，将测试文件名和目录组合成完整的路径
        // console.log(path.format({
        //     root: dirName + '/__test__/',
        //     base: testName
        // }), 'fffffffffffffffffffff');

        return path.format({
            root: dirName + '/__test__/',
            base: testName
        })

    }



    /**
 * 生成测试源代码字符串。
 * @param {string} methodName - 要测试的方法名称。
 * @param {string} classFilePath - 源文件的相对路径。
 * @param {boolean} [isClass=false] - 指示方法是否属于一个类。
 * @returns {string} 返回测试方法的源代码字符串。
 */
    getTestSource(methodName, classFilePath, isClass = false) {
        // 根据是否是类方法，动态构造测试代码字符串
        return `test('${'TEST ' + methodName}',()=>{const ${isClass ? '{' + methodName + '}' : methodName} =require('${'../' + classFilePath}');const ret = ${methodName}();//expect(ret).toBe('test return');
    })`
    }


    /**
     * 获取对应源代码路径下的Jest测试文件。
     * 该函数首先会检查是否存在`__test__`目录，如果不存在，则创建该目录。
     * 然后，遍历源代码路径下的所有文件，排除以'.spac'结尾的文件，并为每个非测试文件生成对应的测试文件。
     * 
     * @param {string} sourcePath - 源代码路径的默认值为当前目录。 
     * 
     * 
     */
    //__dirname + '\\data',此函数被调用的时候，传入的参数是data文件夹下的文件和文件夹
    getJestSource(sourcePath = path.resolve('./')) {

        // console.log(path.resolve('./'), 'dddddddddddddddddddddd');

        const _this = this;

        // console.log(sourcePath, __dirname + '\\data', 'aaaaaaaaaaaaaaaaa');

        const testPath = `${sourcePath}\\__test__`; // 定义测试文件存放目录的路径

        // console.log(fs.existsSync(testPath), testPath, 'ssssssssssssssss');

        // 判断__test__文件夹是否存在，不存在就创建__test__文件夹，通常情况下是不会删除__test__文件夹的
        if (!fs.existsSync(testPath)) {
            fs.mkdirSync(testPath); // 如果测试目录不存在，则创建测试目录。mkdirSync的mk是make的缩写
        }


        // 遍历源代码路径下的所有文件和目录，__dirname + '\\data'，data下的文件

        let list = fs.readdirSync(sourcePath);
        const aa = list.map((item) => {
            return `${sourcePath}/${item}`
        })
        // console.log(aa.filter(item => fs.statSync(item).isFile()), 'hhhhhhhhhhhhhhhhhhhhhhhh');//getJestSource函数被调用的时候，传入的参数是data文件夹下的文件和文件夹

        list
            // 为每个文件名添加完整路径
            .map((item) => `${sourcePath}/${item}`)
            // 过滤出文件（排除目录）
            .filter(item => fs.statSync(item).isFile())
            // 排除以'.spac'结尾的文件,indexOf没有查找到返回-1
            .filter(item => item.indexOf('.spac') === -1)
            // 为每个非测试文件生成对应的测试文件
            .map(item => _this.getTestFile(item))
    }

    /**
     * 获取测试文件。
     * 根据给定的文件名，生成对应的测试文件。如果测试文件已存在，则不进行任何操作。
     * @param {string} fileName - 需要生成测试文件的源文件名。
     */
    getTestFile(fileName) {//参数为源文件路径，没加.spec的js文件
        // console.log('fileName:', fileName, 'kkkkkkkkkkkkkkkkkkkkk');
        //拼接为测试文件名，加了.spec.js后缀
        const testFileName = this.getTestFileName(fileName);

        // 检查测试文件是否已经存在，通常会不存在的，因为每次运行都会被清理掉
        if (fs.existsSync(testFileName)) {
            console.log('此测试代码已经存在', testFileName);
            return; // 如果已存在，则终止执行
        }

        // 加载源文件
        //fileName参数为源文件路径，没加.spec的js文件
        const mod = require(fileName);

        let source;
        // 根据源文件类型（对象或函数），生成不同的测试源码
        if (typeof mod === 'object') {
            // 如果是对象，从对象的键生成测试源码
            source = Object.keys(mod)
                .map(item => this.getTestSource(item, path.basename(fileName), true))
                //把数组转换成字符串，同时换行。
                .join('\n');
            // console.log(source, 'yyyyyyyyyyyyyyyyyyyy');
        } else if (typeof mod === 'function') {
            // 如果是函数，生成对应的函数测试源码,fileName参数为源文件路径，没加.spec的js文件
            const basename = path.basename(fileName);
            // console.log(basename, 'ppppppppppppppppppppp');
            source = this.getTestSource(basename.replace('.js', ''), basename);
            // console.log(source, 'ooooooooooooooooooooooo');
        }

        // 将生成的测试源码写入文件,
        //testFileName常量接收的是getTestFileName函数返回值，getTestFileName函数把源文件更改为测试文件名，即加了.spec.js后缀。
        fs.writeFileSync(testFileName, source)
    }
}
