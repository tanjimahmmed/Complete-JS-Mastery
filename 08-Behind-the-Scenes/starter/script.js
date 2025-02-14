'use strict';
/*
// 3 type of scope - global, function, block
function calcAge(birthYear){
    const age = 2037 - birthYear;
    // console.log(firstName);
    function printAge(){
        let output = `Your are ${age}, born in ${birthYear}`
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1998){
            var millennial = true;
            // creating new variable with same name as outer scopes variable
            const firstName = "Miller"
            // Reassigning outer scop's variable
            output = "New Output"
            const str = `Oh, you are millennial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }
        // console.log(str)
        // console.log(millennial)
        // add(2, 3)
        console.log(output);
        
    }
    printAge();
    return age;
}
const firstName = "Tanjim";
calcAge(1998); 
// console.log(age)
// printAge();
*/

/*
console.log(me);
console.log(job);
console.log(year);
*/
/*
var me = "Tanjim";
let job = "developer"
const year = 1998;


// functions
console.log(addDecl(3, 2));
console.log(addArrow);
console.log(addArrow(3, 2));
console.log(addArrow(3, 2));

function addDecl(a, b) {
    return a + b
}

const addExpr = function (a, b){ // temporal dead zone
    return a + b;
}

var addArrow = (a, b) => a + b;

// example
console.log(numProducts);

if(!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart(){
    console.log("All products deleted");
    
}
*/
/*
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// console.log(this);

/*
const calcAge = function(birthYear) {
    console.log(2047 - birthYear)
    // console.log(this);
    
}

calcAge(1998);

const calcAgeArrow = birthYear => {
    console.log(2047 - birthYear)
    // console.log(this);
    
}

calcAgeArrow(1998);

const tanjims = {
    year: 1998,
    calcAge: function () {
        console.log(this);
        console.log(2047 - this.year);
        
    }
}
tanjims.calcAge();

const matilda = {
    year: 2021
}

matilda.calcAge = tanjims.calcAge;
matilda.calcAge();

const f = tanjims.calcAge;
f();
*/

/*
// Object reference - heap and call stack
const name = "Mac";
const age = calcAge(1998);
let newAge = age;
newAge++;

const location = {
    city: "Faro",
    country: "Portugal"
};

const newLocation  = location;
newLocation.city = "Lisbon";

console.log(location);

function calcAge(birthYear) {
    const now = 2037;
    const x = now - birthYear;
    return x;
}
*/

/*
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName;
    return originalPerson
};

const marriedJessica = marryPerson(jessica, "Davis");

// const marriedJessica = jessica;
// marriedJessica.firstName = "Davis";

console.log("Before:", jessica);
console.log("Before:", marriedJessica);

// jessica.age = 26;
// jessica = {x : 26}
*/


const jessica1 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
};

// shallow copy
const jessicaCopy = {...jessica1};
jessicaCopy.lastName = "Davis1";
jessicaCopy.family.push("John");

console.log("Before:", jessica1);
console.log("Before:", jessicaCopy);

// deep copy
const jessicaClone = structuredClone(jessica1);
jessicaClone.family.push("Mary");
jessicaClone.family.push("Nolan");

console.log("Original:", jessica1);
console.log("Clone:", jessicaClone);
