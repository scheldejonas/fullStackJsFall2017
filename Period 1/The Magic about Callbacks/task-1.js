var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
console.log(names);
console.log('Now using filter method and displaying the result.');
var fewerNames = names.filter((name) => {
    if ( name.indexOf('r') !== -1) {
       return true;
    }
    return false;
});
console.log(fewerNames);
console.log('Now using map method and displaying the result.');
var oneTextOfArray = '';
var resultAfterMap = names.map((name) => {
    oneTextOfArray += name;
    return name.concat(' | ');
});
console.log(resultAfterMap);
console.log('And this is how it looks if you just concat the text in one string.');
console.log(oneTextOfArray);