var filePath = process.argv[2];                                              //console.log(filePath);
var fs = require('fs');
var fileForTestAsBuffer = fs.readFileSync(filePath);                        //console.log(fileForTestAsBuffer);
var fileAsNewLineArray = fileForTestAsBuffer.toString().split('\n');        //console.log(fileAsNewLineArray.length-1);
console.log(fileAsNewLineArray.length-1);