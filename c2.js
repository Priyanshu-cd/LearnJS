//  C2 Ques:

//1
// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
function evenFilter(arr){
    if (!arr){
        throw new Error("Invalid Input! in the evenFilter function.")
    }
    else{
        let filtered_list=[]
        for(let i=0;i<arr.length;i++){
            let num = arr[i]
            if (num%2===0){
                continue;
            }else{filtered_list.push(num);}
        }
        return filtered_list
    }
}
let array = [12,3,4,5,6,7,8,90]
const filtered=evenFilter(array)
console.log("FILTERED Even:",filtered);

//2
// 2. Object Manipulation: Given an array of objects representing people with names and ages,
//  write a function to find the person with the highest age.
function higestChk(arr){
    if(!arr){
        throw new Error("Wrong input in higestChk function!")
    }
    else{
        let highest=arr[0]
        for(let i=1;i<arr.length;i++){
            if (arr[i].age>highest.age){
                highest=arr[i]
            }
        }
        if(highest.name!=null){
            return highest
        }
        else{
        throw new Error("Unwant Error!")

        }
    }
}
lst=[
    {name:"Priyanshu",age:20},{name:"Prerna",age:122},{name:"Rakesh",age:49},{name:"Monika",age:44},
]
big=higestChk(lst)
console.log(big.name,big.age);

//3
// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
function strTonum(arr){
    if(!arr){
        throw new Error("strTonum has Invalid Input!")
    }
    else{
        let converted = []
        for (let i =0;i<arr.length;i++){

            if (!parseInt(arr[i])){
                continue;
            }else{
            let num = parseInt(arr[i])
            converted.push(num)}
        }
        return converted
    }
}
arr = ['1','2','3','4','Priyanshu','5','6','7']
num_arr=strTonum(arr)
console.log(num_arr);

//4
// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
function sortFunc(arr){
    if (!arr){
        throw new Error("sortFunc function has issues")
    }
    else{
        sorted=arr.sort(
                //Value a,b
            function(a,b){ //SORT FUNCTION
                // return a.price - b.price //ascending
                return b.price - a.price  //descending
            }
        )
        return sorted
    }
}
array =[
    {price:55},
    {price:25},
    {price:89},
]
let srt = sortFunc(array)
console.log("\'srt\':::::",srt);


//5
// 5. Array Manipulation: Write a function that removes 
//  the first and last elements from an array 
// and returns the modified array.
function remove(arr){
    if (!arr){
        throw new Error("sortFunc function has issues")
    }
    else{
        modified = arr
        modified=modified.slice(1,modified.length-1)
        return modified
    }
}
array = [1,2,3,4,5,6,7,8,9]
removed=remove(array)
console.log(removed);

//6
// 6. Object Iteration: Given an object representing
//  a shopping cart with items and their quantities, 
// write a function that calculates the total cost of the items.
obj = {
    "Cheese":{
        qtn:5,price:55,
    },
    "Milk":{
        qtn:8,price:78},
    "Ferrero":{
        qtn:10,price:278,
    }
}

function total(obj){
    if (!obj){
        throw new Error("sortFunc function has issues")
    }
    else{
        bill=0
        values=Object.values(obj)
        console.log(values);
        
        for(let i=0;i<values.length;i++){
            sum = (values[i].price * values[i].qtn)
            console.log(values[i].price ,'*',values[i].qtn,'=',sum);
            bill += sum
            
        }
        return bill
    }

}
bill=total(obj)
console.log(bill)

//7
// 7. Object Manipulation: Write a function that 
// deep clones an object (i.e., copies all nested objects and arrays) 
// to prevent unintended mutations.

function deepClone(obj){
    if(!obj){
        throw new Error("deepClone has issues!")
    }else{
        let cloned = {}
        all_keys = Object.keys(obj)
        for(let i = 0;i<all_keys.length;i++){
            let current = all_keys[i]
            cloned[current] = obj[current]
        }
        return cloned
    }
}
let friend = {
    'rupert':{
        hobbies:["gym","music","gaming"]
    }
}
// let frndClone=friend
// console.log("CLONE:::::::::",frndClone);
// friend.rupert.hobbies[0]="Dancing" //Clone also get changed..
// console.log("After Changes on Clone ::::::::::",frndClone)

let frndClone=deepClone(friend)
console.log("CLONE:::::::::",frndClone);
friend.rupert.hobbies[0]="Dancing" //Clone also get changed..
friend["priyanshu"]={hobbies:["music"]}//no change
console.log("After Changes on Clone ::::::::::",frndClone)
console.log("After Changes on Clone ::::::::::",friend)


//8
// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
obj = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function total(obj){
    if (!obj){
        throw new Error("sortFunc function has issues")
    }
    else{
        sum=0
        values=Object.values(obj)
        console.log(values);
        
        for(let i=0;i<values.length;i++){
            sum += values[i].grade            
        }
        return (sum / values.length)
    }

}
let avg=total(obj)
console.log(avg)

//9
// 9. Scope and Closure: Create a function that returns a new function.
//  The returned function should remember and log the number of times it's been called.
function itemNumber(){
    let num =0

    return function(){
        num++
        console.log(num);
        
    }
}
let counter = itemNumber()
counter()
counter()
counter()

//10
// 10. Array Sorting: Write a function that 
// sorts an array of objects based on a specific property 
// (e.g., 'date') in descending order.
let grades_array = [
    { subject: 'maths', grade: 10 , money:3},
    { subject: 'spanish', grade: 2 , money:22},
    { subject: 'literature', grade: 6, money:20 }
]
function newSort(arr,to){
    if(!arr || !to){
        throw new Error("Some issues in newSort!")
    }else{
        let sorted = arr.sort(
            function(a,b){
                return b[to] - a[to]   
            }
        )
        return sorted
    }
}
sorted = newSort(grades_array,"money")
console.log("::::newSorted:::::",sorted);


//11
// 11. Array Methods: Given an array of strings,
//  filter out all the strings with a length less than 5 characters.
function filter_5(arr){
    if (!arr){
        throw new Error("sortFunc function has issues")
    }
    else{
        let filtered =[]
        for(let i=0;i<arr.length;i++){
            if (arr[i].length<5){
                continue
            }else{
                filtered.push(arr[i])
            }
        }
        return filtered
    }
}
list = ["Prerna","moli","priyanshu","Raksha","budh"]
modified=filter_5(list)
console.log(modified);

//13
// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string 
// and stores the results in an object.
function strCount(word){
    if (!arr){
        throw new Error("sortFunc function has issues")
    }
    else{
        obj={}
        all=word.split(' ')
        for(let i=0;i<all.length;i++){
            if(all[i]!=' '){
            if(all[i] in obj){
                obj[all[i]]+=1
            }
            else{
                obj[all[i]]=1
            }
        }}
        return obj
    }
}
str="What is the Best Man is bad"
obj = strCount(str)
console.log("OBJ",obj);

