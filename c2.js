str = "Priyanshu Sharma"
// 0,1,2,3,4
//p,r,i,y,a
//index 0 -> .length -1
console.log(str[4]) //a

// string concanation (string add)
let combine = str + " is great"
console.log(combine) //Priyanshu Sharma is great

//Integer add string
console.log('6' + 4) // in '+' =  64
console.log('6' - 4) // in '-' = 2 // type values changes..

//Function of strings:
const index_of_p = str.indexOf('P') //Case sensative..
console.log(index_of_p);  // 0

console.log(str.includes('P')) // true , check and return bool if exist true.

/*Split*/
console.log(str.split()) // [ 'Priyanshu Sharma' ] , all into one string list
console.log(str.split('')) /*
  'P', 'r', 'i', 'y',
  'a', 'n', 's', 'h',
  'u', ' ', 'S', 'h',
  'a', 'r', 'm', 'a'
] , each character into list */
console.log(str.split(' '));  // each word into list..

                        // which , what
let str2 = str + " is great dev"
str2 = str2.replaceAll(' ','_') // also replace() , change first found only...
console.log(str2); // Priyanshu_Sharma_is_great_dev

                    // start , stop
console.log(str2.slice(8,14)) //u_Shar

