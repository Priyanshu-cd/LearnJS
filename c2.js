// ERROR HANDLING:

//Try,Catch:

dict = {hello:"bro"}
console.log(dict.new_key) //undefined

try{
    console.log(dict.new_key.nested_key) //undefined -> nested key (error)
    }
    //error
catch (e){
    console.error("Error::",e.message);   
}

// Create Custom Error:

function isAdult(a){
    try{
        if(a<18){
            throw new Error("Not Adult!")
        }
    }catch (e){
        console.log("Error is",e.message);
        
    }
}

isAdult(12)//Error is Not Adult!

console.log("Further executing..");

/*
You can use logs to further do debuggings...
*/