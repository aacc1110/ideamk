var fs = require('fs');

var obj = {
table: []
};

fs.exists('entry.json', function(exists){
    if(exists){
        consol.log("yes file exists");
        fs.readFile('entry.json', function readFileCallback(err, data){
        if (err){
            consol.log(err);
        } else {
        obj = JSON.parse(data); 
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj); 
        fs.writeFile('entry.json', json); 
        }});
    } else {
        consol.log("file not exists");
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj);
        fs.writeFile('entry.json', json);
        }
    });