// C1 Ques:

// 1 
// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let my_name = "Priyanshu"
console.log(my_name);
my_name = "Priyanshu Sharma"
console.log(my_name);

//2 
// 2. How would you compare two variables, a and b, to check equality?

const a = 3
const b = '3'
console.log(a == b); //true
console.log(a === b ); //false

//3
// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".

const age = 18
if (age>=18){
    console.log("Adult");
    
}else{console.log("Minor");
}

//4
// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

for( let i = 0;i<=10;i++){
    if (i%2==0){
        console.log(i);
        
    }
}

//5
// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.

const arr = [22,3,45,5,8,99]
let i = 0
let sum = 0;
while (i<arr.length){

    if (sum>100){break;}
    else{
    sum = sum + arr[i];console.log("Sum:",sum)}
    i++;
}

//6
// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height

function calculateArea(l,w){
    if (!l || !w){
        return
    }else{
        return l*w
        
    }
}
ans=calculateArea(5,4) 
console.log(ans);//20

calculateArea() //nothing just go out.

ans2=calculateArea()
console.log(ans2); //undefined




