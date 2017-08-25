var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35}
];

var reducer = function(accumulator, member, index, arr){
    var temp = accumulator + member.age;
    if (index === arr.length - 1) {
        return temp / arr.length;
    }
    return temp;
}, initValue;

var initValue = 0;

var average = members.reduce(reducer,initValue);

console.log('We are trying to make a reduce method that ends up with the average age.');

console.log(average);