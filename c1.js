// Operators :

/* 

    =   "Assignment" // Assign value to variables,
    + - / * %   "Arithmatical operators",

    Comparison Operators( return Boolean): true , false

    ==  "Soft check" // xtype only value matters.
    === "Hard check" // value and type as well.
    !=   "Not Equal" // Invert Boolean Operation.

    Logical Operators (Gates) like c/c++ :

    &&  AND
    ||  OR
    !   INVERSE
*/
//Example Comparison:
console.log("Soft Check \'6\' == 6",'6' == 6);  //Soft Check '6' == 6 true
console.log("\nHard Check \'6\' == 6",'6' === 6);   //Hard Check '6' == 6 false

//Ex Logical:
let found = true
console.log("!found = true:",!found);   //!found = true: false

//Just for knowledge..
console.log("!0 :",!0 ,"!1 :",!1 ,"!\'\':",!'');//!0 : true !1 : false !'': true

// typeof :
console.log(typeof found); //boolean
console.log(typeof 1239.99); //number
console.log(typeof [1,2,3,99]) //object Xarray.

const typeCheck = typeof "Priyanshu" //storing type..
console.log(typeCheck); //string

