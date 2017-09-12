// Giving an array to be filtered
console.log('Filter function used');
var array = ['California','Portland','Florida', 'New Jersey'];
console.log(array);

var uniqueArray = array.filter(function(elem, index, array) {
        if (elem === 'California') {
            return false;
        }
        return array.indexOf(elem) === index;
    }
);
// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);

console.log(uniqueArray);


// Map function displayed
console.log('Map function used');
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 
// ES6
// fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

console.log(celcius) //  [-18, 0, 7, 10, 24, 27, 37, 49]


// Reduce function displayed
console.log('Reduce function used');
var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
console.log(rockets);

var sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);
// ES6
// rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 

console.log(sum); // 85