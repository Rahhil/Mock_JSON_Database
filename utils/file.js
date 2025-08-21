const fs = require('fs').promises;
const filePath = './dataabse.json';

async function readData() {
    try{
    const data = await fs.readfile(filePath, "utf-8");
    return JSON.parse(data);    

        
    }catch (error){

        console.error("Error reading file:", error);

    }
}

async function writeData(data) {
    try{
    await fs.writefile(filePath, JSON.stringify(data, null, 2));
    return JSON.parse(data);    

        
    }catch (error){

        console.error("Error reading file:", error);

    }
}

module.exports = {
    readData,
    writeData
}