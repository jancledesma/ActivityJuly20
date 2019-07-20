// //Objects

// let obj = {
//     fname: "John",
//     lname: "Doe",
//     age:32,
//     status:"married",
//     //method: function inside of an object
//     fullname:function(){
//         return `${this.fname} ${this.lname}`;
//     },
//     isMarried:function(){
//         if (this.status == "married"){
//             return 'Yes';
//         }
//         else {
//             return 'No';
//         }
//     },
//     minor:function(){
//         if (this.age < 18){
//             return 'Yes';
//         }
//         else {
//             return 'No';
//         }
//     }

// }

// //function: outside of object
// function display(){
//     console.log('hello');

// }

// console.log(display());

// ES6 CLASS

class myclass{
    constructor (name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender
    }
    isMinor(){
        if(this.age < 18){
            return "yes";
        }
        else {
            return "NO";
        }
    }
}

let myobj = new myclass("John", 23, "Male");
let myobj2 = new myclass("Mark", 12 , "Male");




