//const = constant value (can't be changed later )
//datatypes = undefined , null , nan
//in let hoasting(without initializing variable we can't access or use it's value) is not possible
//the lines present above the initialization part of a variable for all those lines we can't access those lines (temporal dead zone)
//non-primitive data type = can only be made in const
//type coorsion(==)
//type sensitive use (===)

// var a=20;z
// console.log(a);
// a=21;
// console.log(a);

// console.log(20);
// console.log(41);
// console.log(a);  //undefined
// var a =20;


// if (abc){
//     comsole.log("Hello");
// }
// else {
//     console.log("Bye");
// }


//Pattern printing 
// let n = 5; // number of rows

// for (let i = n; i >= 1; i--) {
//     let str = " ";
//     for (let j = 1; j <= i; j++) {
//         str += "* ";
//     }
//     console.log(str);
// }




//Functon Declaration...
// function sum(a,b){
//     return a+b;
// }


//Expression Function...
// const sum= function (a,b){
//     return a+b;
// };



//Arrow Function...
// console.log (sum(2,5)); 
// const sum=(a,b)=> {
//     return  a+b;
// };



// const sum=function (a,b){
// return a+b;
// };
// const sum1=sum(2,3);
// const sum2=sum(3,5);
// console.log (sum1,sum2);



// const greeting = (username ="Stupid")=> {
//     console.log("hello !" +username);
// };
// greeting ();


//sum using function...
// const sum=(num1 ,num2, ...rest)=> {
//     let result =num1 + num2;
//     for(let i=0;i< rest.length;i++) {
//         result = result+rest[i];
//     }
//     console.log(result);
// };
// sum(1,2,3,4,5,6,7,8,9);




// create a function calculate
// take atleat 3 parameters - operation - "add","subtract",
// num1-Numbernum2-Numbercan use more parameters
// based on the operation perform
// console.log("Hello");





//IIFE
// (function(){
//    console.log("Hello"); 
// })()

// const person = {
//     name:"Gargi",
// };

// function sayHi(){
//     console.log("Hi", this.name);
// }sayHi()
// person.sayHi();





//creating a promise 
const p = new Promise((resolve, reject) => {
  // async work
  const success=true;
  const error ="Something went wrong";
  if (success) resolve(value);
  else reject(error);
});
//consuming a promise
console.log(success);
p.then((value) => {                                //answer aaya toh = "then",nhi aaya toh "catch" and kuch print karvana hi toh "finally"
    console.log("Success:",value);                 //.then  mai humesha resolve ka ans milta h 
}).catch((error) => {})
.finally(()=>{});


