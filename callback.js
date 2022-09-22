//callback function 

function myFunc(callback){
    //sql query
    //const data = {} callback(data);
    console.log("Hello There I am func");
    callback("Vinay");
}

function myFunc2(name){
    console.log(`your name is ${name}`);
}

myFunc(myFunc2);