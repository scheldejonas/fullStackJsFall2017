// function Numbers(numbs) {
//     //Insert constructor function to solve a this issue.
//     this.nums = numbs;
//     this.fives = [];
//     this.nums.forEach(function (v) {
//         if (v % 5 === 0) {
//             this.fives.push(v);
//         }
//     }.bind(this));
// }
// var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
// console.log(numbers.fives);
//console.log('Hello World');
// Worked !!


function Numbers(numbs) {
    //Insert constructor function to solve a this issue.
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);
// Worked !!

//------------------------------------------
// var Shape = function (id, x, y) {
//     this.id = id;
//     this.move(x, y);
// };
// Shape.prototype.move = function (x, y) {
//     this.x = x;
//     this.y = y;
// };

// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
//     move (x, y) {
//         this.x = x
//         this.y = y
//     }
// }
//------------------------------------------


//------------------------------------------
// var Shape = function (id, x, y) {
//     …
// };
// Shape.prototype.toString = function (x, y) {
//     return "Shape(" + this.id + ")"
// };
// var Rectangle = function (id, x, y, width, height) {
//     Shape.call(this, id, x, y);
//     …
// };
// Rectangle.prototype.toString = function () {
//     return "Rectangle > " + Shape.prototype.toString.call(this);
// };
// var Circle = function (id, x, y, radius) {
//     Shape.call(this, id, x, y);
//     …
// };
// Circle.prototype.toString = function () {
//     return "Circle > " + Shape.prototype.toString.call(this);
// };

// class Shape {
//     …
//     toString () {
//         return `Shape(${this.id})`
//     }
// }
// class Rectangle extends Shape {
//     constructor (id, x, y, width, height) {
//         super(id, x, y)
//         …
//     }
//     toString () {
//         return "Rectangle > " + super.toString()
//     }
// }
// class Circle extends Shape {
//     constructor (id, x, y, radius) {
//         super(id, x, y)
//         …
//     }
//     toString () {
//         return "Circle > " + super.toString()
//     }
// }
//------------------------------------------