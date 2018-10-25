'use strict';

var printFunc = function(name) {
    console.log(name);
}

printFunc('vscode & node.js');
console.log(process.version);

// destructuring
const[one, two] =[1,2];
console.log('one is ${one}, two is ${two}');
process.exit(0);