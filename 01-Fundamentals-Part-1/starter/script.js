/*
let js = "amazing";
if(js === "amazing") alert("You are amazing");
console.log(40 + 20 + 20 + 10);


let firstName = "Tanjim";
console.log(firstName);

// Asignment
let country = "Bangladesh";
let continent = "Asia";
let population = 173

console.log(`Country - ${country}, Continent - ${continent}, Population - ${population} million`);
*/

/*
let javaScript = true;
javaScript = 'Yes!'

console.log(javaScript);
*/

/*
// Math Oopertaors
const now = 2025;

const ageTanjim = now - 1998;
console.log(ageTanjim);
console.log(ageTanjim * 2, ageTanjim / 10, 2 ** 3);

const firstName = "Tanjim";
const lastName = "Milton";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageTanjim >= 18);

const isFullAge = ageTanjim >= 18;
console.log(isFullAge);
console.log(now - 1998 > now - 2018);
*/

/*
const now = 2025;
const ageTanjim = now - 1998;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (ageTanjim + ageSarah) / 2;
console.log(ageTanjim, ageSarah, avarageAge);
*/

/*
// Challange
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHeightBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHeightBMI);
*/

/*
// strings
const firstName = 'Tanjim';
const lastName = 'Milton';
const birthYear = 1998;
const year = 2030;

const tanjim = `I'm ${firstName}, a ${year - birthYear} years old programmer!`
console.log(tanjim);
console.log('String with \n\
    multiple \n\
    lines');

console.log(`String with
multiple
lines`);
*/

/*
// if else

const age = 17;

if(age >= 18){
    console.log("Sarah can start driving license 🚖");
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

*/

/*
// challange
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
*/

// type conversion
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Tanjim"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I have " + 2 + " Billion"); // the number will be string
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; // 11
n = n - 1; // 11 - 1 = 1
console.log(n);

let l = '10'-'4'-'3'-2+'5';
console.log(l);

