//Method or Function :

// like c/c++ but 'function' Keyword :
function myFunc(){
    console.log("Made my first func, yeahh!");
    return "Priyanshu"
    
}
console.log(myFunc); //return type : [Function: myFunc]

// Take return value :
let valueReturn = myFunc()
console.log("Return:",valueReturn);

// function with aruguments :
function Add(a,b){
    return a+b
}

let ans = Add(4,1)
console.log("Add(ans):",ans);

//Copy func or Assign :
let copy_add = Add
console.log("copy_add:",copy_add(9,1));

