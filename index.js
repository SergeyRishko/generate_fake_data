// import fs from 'fs';
const { v4: uuidv4 } = require('uuid');

const separator = ",";
const count = 500;

const data = [];
const char = 'INSERT INTO virtual_tour (tourit_guid, system_id, created_date, source, title, link, coordinate, address_id, category_id, is_matterport, is_active, userid) VALUES';
let result = char;

let inCount = 0;

for (let i = 0; i < count; i++) {
    const item = {};
    item.guid = uuidv4();
    item.system = '6wa7NeP4BUM';
    item.data = '2020-11-18 17:55:27.565971';
    item.source = 'user added';
    item.title = 'test' + i;
    item.link = 'https://my.matterport.com/show/?m=6wa7NeP4BU';
    item.coordinate = [
        (Math.random() > 0.5 ? 1 : -1)*(Math.random() * 90).toFixed(8),
        (Math.random() > 0.5 ? 1 : -1)*(Math.random() * 180).toFixed(8)
    ];
    item.address = 1;
    item.category = 8;
    item.isMatterport = 't';
    item.isActive = 't';
    item.user = '17f32340-092e-4beb-89fd-be671bcd0fc3';
    const char1 = ` ('${item.guid}', '${item.system}', '${item.data}', '${item.source}', '${item.title}', '${item.link}', '{${item.coordinate[0]}, ${item.coordinate[1]}}', ${item.address}, ${item.category}, '${item.isMatterport}', '${item.isActive}', '${item.user}'),`;
    result += char1;
    inCount++;
    if (inCount > 99) {
        result = result.substring(0, result.length - 1) + ';';
        console.log(result);
        console.log('\n');
        result = char;
        inCount = 0;
    }
    
}

