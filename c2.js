// SCOPES:

//Global Scope
let num = 99
//not good approch to use same names..
function scope(){
    let num = 66 //Local Scope
    console.log(num);   
}
scope()//66 
console.log(num);//99
// loops , funcs and other similar methods has their scopes..

// Closer function->function ( static variable for the function):
function counter(){
    let rollno = 0 //static Encapsulated data , remembered in the obj

    return function(){
        rollno++;
        return rollno
        // retourn rolln
    }
}
s = {}

let rollno = counter() //obj

s[rollno()]="Priyanshu"
s[rollno()]="Tarun"

console.log(s); //{ '1': 'Priyanshu', '2': 'Tarun' }

