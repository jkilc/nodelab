const path = require('path');
const fs = require('fs')
const request = require('request')
const dataPath = path.join(__dirname, '/data.json')

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);

    // fs.writeFile(dataPath, body, err => {
    //     if(err) console.log(err);
    // });
    let array = []
    JSON.parse(body).data.children.forEach(item => {
        array.push(item.data.title, item.data.author, item.data.url)
    });
    
    fs.writeFile(dataPath, JSON.stringify(array), (err)=>{console.log(err)});


});


// let data = JSON.parse(fs.readFileSync('./data.json'));
// console.log(data)




