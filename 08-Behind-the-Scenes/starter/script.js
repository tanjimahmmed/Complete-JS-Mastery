'use strict';
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