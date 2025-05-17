// Dict / Object OPERATIONS(key:value,):

const bio ={
    name : "Priyanshu",
    age : 20 ,
    "Profession is":"Student" //with space

}

//Read
let name = "name"
console.log(bio[name] ,bio['name']) //Priyanshu Priyanshu
//if no spaces
console.log(bio.age);
// if key doesn't exist
console.log(bio["random"]) //undefined

//ADD
bio['new_key'] = "new_value"
console.log(bio); //new_key: 'new_value' if space then 'key'

//Change
bio[name]="Monika"
console.log(bio.name); //Monika

//Delete 
delete bio.new_key // or bio["new_key"]
console.log(bio);

// Check in dict:
console.log("new_key" in bio); //check key ,false

//NESTED dicts:

bio["friends"]={
    "Tarun":{
        age:22
    }
}
console.log(bio);
/* {
  name: 'Monika',
  age: 20,
  'Profession is': 'Student',
  friends: { Tarun: { age: 22 } }
} */
console.log("Tarun age is",bio.friends.Tarun.age) //Tarun age is 22 , use ["key"]..also

// OBJECT method in dicts (key , values etc)..
all_keys_of_bio = Object.keys(bio)
console.log(all_keys_of_bio); //[ 'name', 'age', 'Profession is', 'friends' ]

all_values_of_bio = Object.values(bio)
console.log(all_values_of_bio); //[ 'Monika', 20, 'Student', { Tarun: { age: 22 } } ]

all_key_values_of_bio = Object.entries(bio) // array of [key,value].
console.log(all_key_values_of_bio);
/* 
[
  [ 'name', 'Monika' ],
  [ 'age', 20 ],
  [ 'Profession is', 'Student' ],
  [ 'friends', { Tarun: [Object] } ]
]
*/
