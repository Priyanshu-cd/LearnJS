// LOOPS (like c/c++):

//While : 

const arr = [1,2,3,99,45,67];

let i = 0
let length = arr.length

console.log("WHILE LOOP:");
while (i< length){
    console.log(i,arr[i]);
    i++;

}

//For Loop:

console.log("FOR LOOP:");

for (let j=0;j<length;j++){

    if (j %2==0){continue;} //went to next itration.

    if (j == 5){break;} //break the loop and out.
    console.log(j,arr[j]);
    
}

//DO-WHILE LOOP:

console.log("DO-WHILE LOOP:");

let k = 0
do{
    console.log(k,arr[k]);
    k++;
}while(k<length)
    