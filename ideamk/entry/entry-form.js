var fs = require('fs');

console.log('A');

// var result = fs.readFileSync('ideamk/ideamk/entry/test.txt', 'utf8');
fs.readFile('ideamk/ideamk/entry/entry.json','utf8', function(err, result){
    console.log(result);
});

console.log('c');




