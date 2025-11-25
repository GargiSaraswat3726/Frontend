//methods :  
// concat
// Push, indexOf , last index of , found , pop , shift , unshift, map, sort,filter,find 


//Way 1
// const arr = [1,2,3,4,"sam",undefined,NaN,null,false];


// const arr =new Array(8);
// console.log(arr);


// const arr =new Array("abc","def");
// console.log(arr);


// const start =[1,2,3,4];
// const end = [4,5,6,7];
// const newArr =[];
// for(let num of start){
//     newArr.push(num);
// }
// for(let num of end){
//     newArr.push(num);
// }
// console.log(newArr);



// const start =[1,2,3,4];
// const end = [4,5,6,7];
// const newArr = start.concat(end);
// console.log(start);
// console.log(end);
// console.log(newArr);


// const start =[1,2,3,4,5,6,7,24,56,89];
// const index = start.indexOf(56);
// console.log("index of 56 is",index);


// const start =[1,2,3,4,5,6,7,24,56,89];
// const newArr =start.pop();
// console.log(newArr);
// console.log(start);



// const start =[1,2,3,4,5,6,7,24,56,89];
// const newArr =start.push(3);
// console.log(newArr);
// console.log(start);


// const start =[1,2,3,4,5,6,7,24,56,89];
// const newArr =start.shift();
// console.log(newArr);
// console.log(start);



// const start =[1,2,3,4,5,6,7,24,56,89];
// const newArr =start.unshift();
// console.log(newArr);
// console.log(start);



// const start =[1,2,3,4,65,34,5,6,7,24,56,89];
// const sorted = start.sort((a,b) =>{
//     return a-b;
// });
// console.log(sorted);



// const start =[1,2,3,4,65,34,5,6,7,24,56,89];
// const double = start.map((n) => n*2);
// console.log(double);


//  const start =[1,2,3,4,65,34,5,6,7,24,56,89];
//  const double = start.map(function (value){
//     return value*2;
//  });
//  console.log(double);




//  const start =[1,2,3,4,65,34,5,6,7,24,56,89];
//  const double = start.filter( (num) =>num%2 ===0);
//  console.log(double);



//functions are first class citizen in js = treated as a variable (made as normal variable,func can return func)



//finding a number(First Even number).....
// const arr =[3,5,7,9,1,2,34,56,78,89];
// const isEven = (num)=>{
//     return num%2===0
// }

// const firstEven =arr.find(isEven);
// console.log(firstEven);



//add as an argument pass kar rhe h 
// function calc(calculate,num1,num2){
//     console.log(calculate(num1,num2));
// }
// function add(num1,num2){
// return num1+num2;
// }

// function product(num1,num2){
//     return num1*num2;
// }
// calc(add,5,10);
// calc(product,5,10);

// const evenArr= Array.filter((num)=>{
//     return num%2===0;
// })



//Eloquent js (Yellow coloured) => js book
const arr=[1,2,3,4,5,6,7,8,9,10];
const primeArr = arr.filter((num)=> 
for(let i=2;i<num;i++){
if (num%i===0){
return false;
}
return num;
}
)
console.log(primeArr);


