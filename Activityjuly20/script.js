// ARRAYS

// let persons = ["john", "tony", "paul", "mark"];

// let output = "";
// for(let x=0; x < persons.length; x++){

//     output += "<li>" + persons[x] + "</li>";

// }

// document.getElementById('container').innerHTML = "<ul>" + output + "</ul>"

// OBJECTS

// let person = {
//     fname:"John",
//     lname:"Doe",
//     age:32
// };


// ARRAY OF OBJECTS

let persons = [
    {
        fname:"John",
        lname:"Doe",
        age:23
    },

    {
        fname:"Lucas",
        lname:"Films",
        age:32        
    },
    {
        fname:"Tony",
        lname:"Stark",
        age:3000
    }
]
let output = "";
persons.forEach (function(item){
   output += `<p> Your name is ${item.fname} ${item.lname} </p>`;

})

document.getElementById('container').innerHTML = output;