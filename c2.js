//List oprations:
const str = "Priyanshu is great dev"

let arr = str.split(' ')
console.log(arr); //[ 'Priyanshu', 'is', 'great', 'dev' ]

//Read
console.log(arr[0]) //Priyanshu (index = 0)

//change
arr[0] = "Tarun"
console.log(arr); //[ 'Tarun', 'is', 'great', 'dev' ]

//Add
arr.push("Lie")
console.log(arr); //[ 'Tarun', 'is', 'great', 'dev', 'Lie' ]

//POP()
arr.pop() //remove last
console.log(arr); //[ 'Tarun', 'is', 'great', 'dev' ]

//Operations: all like string , includes(value)=bool ,indexOf("dev") .slice(start_index)etc
console.log(arr.join()) //Tarun,is,great,dev
console.log(arr.join(" ")) //Tarun is great dev (join with " ", "_")

console.log(arr.sort()) //[ 'Tarun', 'dev', 'great', 'is' ] alphbetically sorted..

//MULTIDIMENTION ARRAY:
arr2 = [[3] , [4] , [5]] 
arr2[0][0] = 99
console.log(arr2[0][0]) // 99

for(let i = 0;i<arr2.length;i++){
    list1=arr2[i]
    
    for(let j=0;j<list1.length;j++){
        console.log(list1[j] , arr2[i][j]);
        // console.log(arr2[i][j]);   
    }
}
/*
99 99
4 4
5 5 */

//Some method changes the whole array then assign:
/*
arr4 = arr3.pop() , sort() = 
                    arr3.pop()
                    arr4=arr3
*/

// Add 2 LISTS...
//      0       1       2       3          
// [ 'Tarun', 'is', 'great', 'dev' ]
list1=arr.slice(0,2) // [ 'Tarun', 'is' ] ,2 is exclude
list2 = arr.slice(3) // [ 'dev' ] 
console.log(list1.concat(list2));
