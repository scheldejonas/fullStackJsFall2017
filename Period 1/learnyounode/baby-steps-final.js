let totalNumber = 0;
for (i = 0; i < process.argv.length; i++) {                 //console.log(i); console.log(process.argv[i]);
    if (i !== 0 && i !== 1) {                               //console.log('I was here');
        totalNumber += Number(process.argv[i]);
    }
}
console.log(totalNumber);