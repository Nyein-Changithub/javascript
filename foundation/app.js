

// If loop //   1 

// let fruits="pineapple";

// if (fruits=="banana"){
//     console.log('This is banana');
// }
// else if(fruits=="apple"){
//     console.log("this is apple");
// } 
// else if (fruits=="orange"){
//     console.log("this is orange");
// }
// else {
//     console.log("this is another fruits.");
// }

// switch loop //  2

// let fruit=prompt("enter your fruit name!");

// switch(fruit) {
//     case "apple" :console.log("this is the apple.");
//     break;
    
//     case "banana" : console.log ("this is the banana") ;
//     break;

//     case "orange" : console.log ("this is the orange") ;
//     break;

//     default: console.log  ("this is the no fruit.");
//     break;
// }

// while , do while loop //  3

// let number = 100;

// while (number <=10) {
//     console.log("number is" + " " + number);
//     number++;
// }

// console.log("end");


// let num= 100;

// do {
//     console.log("the num" + num);
//     num++;
// } while ( num <= 10)

// console.log("end");



// for loop //  4 

// let num1, num2;

// num1=parseInt(prompt("enter number1 less than 5"));

// while (num1>5) {
//     num1=prompt("enter number1 less than 5");
// }

// num2=parseInt(prompt("enter number2 greater than 5"));
// while (num2<=5){
//     num2=prompt("enter number2 greater than 5");
// }

// for (num1; num1 <= num2; num1++){
//     console.log(num1);
// }



// function //  5 

// -> no argument function

// function getName(){
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
// }
// // getName();


// //-> One argument function 

// function getName(num1) {
//     console.log(num1);
// }

// // getName(20);

//  //-> multi argument function 

//  function getName (num1,num2){
//     console.log(num1);
//     console.log(num1+num2);
//  }

// //  getName(100,200);

 
//default variable 

// function getName (num1= 0 , num2= 0){
//     console.log(num1+num2);
// }

// // getName(100,);
// // getName(200,400);
// // getName ();

// // var num1= 1000 ;

// function testing (num1){
//     var num1=100        //local variable
//     console.log(num1);
// }

// // testing ();

// console.log(num1);



// typefunction & voidfunction 


// function voidfunction(num1,num2){
//     console.log(num1+num2); //void funciton
// }

// // voidfunction (10,20); //void function;


// function typefunction(num1, num2){
//     return ( num1+num2);  // type function
// }
 
// let result= typefunction (100,200); //300 type function
// // console.log(result);


// // variable function 

// function greet(num1){
//     console.log(num1); //simple function;
// }

// greet(100);

// var greeting= function (num1){
//     console.log (num1);  // variable funciton ;
// }

// // greeting(10);

// //arrow function 

// var one= (name) => {  
//     console.log (name)  // arrw function
// }

// var two= (name) => console.log("kyaw Kyaw"); // no " {}" function
// var three= (a,b) => console.log (a+b);


// // one("mg mg");
// two();
// three(10,20);


// array  //   6 

// simple array

// var fruit=["mango",10, "apple"];
// console.log(fruit);

// var num1=[1,2,3,4,"mango","banana"];
// console.log(num1);
// console.log(num1[4]);
// console.log(num1.length);
// var fruits=["mango","banana","orange","apple"]

// for (var i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for ( var i=0; i<= fruits.length-1; i++){
//     console.log(fruits[i]);
// }

//associated array /

//  var associatedArray=[];

// associatedArray['name']="Kyaw Kyaw";
// associatedArray['age']=20;

// // console.log(associatedArray);
// // console.log(associatedArray['age']);
// // console.log(associatedArray['name']);

// var  asso={
//     name:"kyaw kyaw",
//     age:30,
//     greeting(){
//         console.log(`hello ${this.name} `);
//     }
// }

// // console.log(asso.greeting());
// console.log(asso.name);
// console.log(asso.greeting());


// var num1=[1,2,3,4];

// num1.shift(5,6);
// num2= num1.push(5);
// num1.push(5);
// num2=[...num1,6,7];

// console.log(num1);
// console.log(num2);



// var num1= [ 1, 2, 3, 4]

// num1.unshift(5,6,7 ,8 );

// let  result= num1.map ( function(n) {
//     return n * 10 ;
// });
 
// console.log(result);


// var arr=[ 10,20,30,40]

// var a= arr[0];
// var b= arr [1];
// var c= arr [2];
// var d= arr [3];

// console.log(a,b,c,d);


// function show( a,b){
//     console.log(a);
//     console.log(b);
// }

// var arr1= [10,20];
// //  show(arr1[0],arr1[1]);
// show(arr1);


// function show( [a,b]){
//     console.log(a);
//     console.log(b);
// }

// var arr1= [10,20];
// //  show(arr1[0],arr1[1]);
// show(arr1);


// Objects //  7

// var car = new Object();
// car.name = "BMW";
// car.price = "$12000";

// console.log(car); 

// function book ( a, b) { => structure
//     this.title = a;
//     this.price = b;
// };

// let result = new book ('myanmar','1200ks');
// console.log(result);


//  var  book1 = new Object(); // same with above 
//  book1.title ="myanmar";
//  book1.price = "1200ks";

// console.log(book1);

// var dress = new Object ();// same with above 
//  dress.title = "T-shrit";
//  dress.price = "13000";

//  console.log(dress);

//   function dress (a,b,c){ => structure
//     this.title = a;
//     this.brand = b;
//     this.price = c;
//   };

//   let get = new dress ("T-shirt", "goeranzo", "15000ks");
//   console.log(get);


// "toFixed", "toUpperCase","toLowerCase","trim","substr","split", // some useful method // 8

// let num = 1.456812;
// // console.log(num);
// console.log(num.toFixed(3));

// var name = "hello world";
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// var name1= "hello world";
// console.log(name1.substr(6,3));

// var name1= "              hello world      ";
// console.log(name1.trim());

// var name2 = " hello world";
// console.log(name2.split())
// console.log(name2.split(" "))
// console.log(name2.split(""))

// var date = new Date();
// console.log(date);

// var date = "22/11/2023";
// // console.log(date);
// // console.log (date.split("/"));

// [day , month , year]=(date.split("/"))

// console.log(day);
// console.log(month);
// console.log(year);
