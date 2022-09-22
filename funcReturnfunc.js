//function return function

//function jo wo kuch bhi return kar sakta hai


function myFunc(){
    //return "a";
    //return [1,3,5];
    //return {name : "Vinay", age : 22};
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const ans = myFunc();

//console.log(ans);
ans();

//agar aap ek function input me le rahe ho ya phir ek function return
//kar rahe ho to aise function ko hamlog higher order function kahte
//hai