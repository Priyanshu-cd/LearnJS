// return Examples:

function addStr (str1,str2){

    console.log("!str1:",!str1 ,"!str2:",!str2);// !variable = undefined .'. true
    
    // Check one of them is undefined...
    if (!str1 || !str2){
        return "Value not exists!";
        /*
            return

            Xerror
            in this the function get out normally. and if value=func() // gives undefined
        */
        
    }
        
    else{
        return str1+ " "+str2;}

    //return str1+ " "+str2; // Xcondition
}

// Xcondition
let ans = addStr() // default (undefined,undefined) ; !str1: true !str2: true
console.log(ans); //undefined undefined

// after condtition:
ans = addStr("Priyanshu","Sharma") // !str1: false !str2: false
console.log(ans) // Priyanshu Sharma

ans = addStr() //!str1: true !str2: true
console.log(ans) // Value not exists!

// return 
console.log("return");
addStr()
