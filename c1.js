// Conditional Statements (like c/c++):
let condition1=false
let condition2=false

if (condition1 && condition2){
    console.log("Both true");   
}
else if (condition1 || condition2){
    console.log("one of them is true"); 
}
else{
    console.log("None of them is true");  
}

//Example (Age checking for driving licence):
function ageChk(age){
    if (age >= 18){
        console.log("Eligible for DL");  }
    else if (age > 16 && age < 18){
        console.log("Eligible for Child DL")    }
    else{
        console.log("Not Eligible");    }   
    }

ageChk(18) //Eligible for DL
ageChk(17) //Eligible for Child DL
ageChk(11) //Not Eligible

