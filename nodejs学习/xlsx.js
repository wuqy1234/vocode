const XLSX = require('xlsx');

// 假设你有一些JSON数据
const json_data = [
    { "姓名": "小明", "城市": "北京", "爱好": "钓鱼", "年龄": 18, "性别": "男" },
    { "姓名": "小海", "城市": "上海" },
    { "姓名": "小华", "城市": "广州" }
];

// 用json_to_sheet转换为工作表
const worksheet = XLSX.utils.json_to_sheet(json_data);

// 创建一个新的工作簿
const workbook = XLSX.utils.book_new();

// 将工作表添加到工作簿
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// 写文件
XLSX.writeFile(workbook, "C:\\Users\\86166\\Desktop\\测试.xlsx");