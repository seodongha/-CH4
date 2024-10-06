const fs = require('fs');

// assets/item.json 파일 읽기
const items = JSON.parse(fs.readFileSync('./assets/item.json', 'utf8'));

// 아이템 데이터를 콘솔에 출력 (테스트용)
console.log(items);
