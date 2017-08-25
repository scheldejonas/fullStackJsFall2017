var array = ['Jonas', 'Peter', 'Thomas', 'Casper'];

function callback() {
    console.log('I was inside the callback function.');
    return true;
};

number = [1,4,6,2];

callback(number);

function myMap(arr, callback) {
    var temp = [];
    for(var i = 0; i < arr.length; i++) {
        temp[i] = callback(arr[i]);
    }

    return temp;
}
var times10 = myMap(number,numb => numb * 10);

console.log(times10);

function myMapForEach(arr, callback) {
    var temp = [];

    arr.forEach(function(element) {
        temp.push(callback(element));
    });

    return temp;
}

var times10ForEach = myMapForEach(number, numb => numb *10);

console.log(times10ForEach);

console.log('Prøver at lave en reduce metode');

console.log(number.join(""));

console.log('Lad os prøve se om vi kan lave en reduce function, som giver os de sammenregnede tal');

var newNumberAfterReduce = -1;

var reducer = function(accumulator,item){
    return accumulator + item;
};

var initialValue = 0;

var newNumberAfterReduce = number.reduce(reducer,initialValue);

console.log(newNumberAfterReduce);