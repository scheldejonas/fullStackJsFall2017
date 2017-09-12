// Clouser example of the simple way it works
console.log('\nTest case of Closure simple explained');
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​

// The closure (lastName) is called here after the outer function has returned above​​
// Yet, the closure still has access to the outer function's variables and parameter​
console.log('Firstname is already set before this function call: ' + mjName ("Jackson")); // This celebrity is Michael Jackson

// Closure used to store outer functions variables for later invocations needs
console.log('\nTest case of Closure with later acces for outer functions variables, because of the need for later inner function invocation');
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
}
var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
console.log('Before setID is called: ' + mjID.getID()); // 999​
mjID.setID(567); // Changes the outer function's variable​
console.log('After setID is called: ' + mjID.getID()); // 567: It returns the updated celebrityId variable


// Closure gone wrong
console.log('\nTest case of Clouse gone wrong');
function celebrityIDCreator1 (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function()  {
        return uniqueID + i; //the i var is then wrongly later being used on id(), but it will
      }
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator1 (actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log('Stallone ID: ' + stalloneID.id()); // 103 (wrong)
console.log('Cruise ID: ' + createIdForActionCelebs[1].id()); // 103 (wrong)

// The solution to closure gone wrong above
console.log('\nTest case of wrongly closure solved with IIFE - Immediatly invoked function expression');
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE​
            return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array​
        } (i); // immediately invoke the function passing the i variable as a parameter​
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
var stalloneID = createIdForActionCelebs [0];
console.log('Stallone ID: ' + stalloneID.id); // 100​
var cruiseID = createIdForActionCelebs [1];
console.log('Cruise ID: ' + cruiseID.id); // 101