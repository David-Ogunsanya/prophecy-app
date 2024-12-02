const xlsx = require('xlsx');
const path = require('path');

const loadExcelData = () => {
    const filePath = path.join(__dirname, 'Daniel_7_3.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    return data;
};

module.exports = loadExcelData;
