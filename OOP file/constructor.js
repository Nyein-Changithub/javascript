// constructor & litral Object // // 

// var str = "hello";// string
// console.log(typeof str);

// var ob = new Object ("hello"); // Object
// console.log(typeof ob);

// litral & object //

// const book = {
//     title : "English",
//     author : "kyaw kyaw",
//     price : "1200ks",
//     getTitle :function (){
//         return `this book title is ${this.title}`;
//     },
// }

// console.log(book);
// console.log(book.getTitle());
// console.log(Object.keys(book));
// console.log(Object.values(book));

//constructor //

// function magazine (title , author , price){
//  this.title = title;
//  this.author = author;
//  this.price = price;
//  this.getMagazine = function (){
//     return `this title is ${this.title}`;
//  };
// }

// var maga =  new magazine ("Myanmar", "Zaw Zaw", " 15000ks");
// console.log(maga);
// console.log (maga.title);
// console.log(maga.getMagazine());
// console.log(Object.keys(maga));
// console.log(Object.values(maga));


// prototype //

// function magazine (title , author , year){
//    this.title = title;
//    this.author = author;
//    this.year = year; //2000 years
//    // this.getMagazine = function (){
//    //    return `this title is ${this.title}`;
//    // };
//   }

//   magazine.prototype.getMagazine = function (){
//    return `this title is ${this.title} and it is written by ${this.author} produced at ${this.year} years.`;
// }; 


//  magazine.prototype.getYears = function (){
//    const year = new Date().getFullYear()-this.year;
//   //  console.log(year);
//    return `this magazine is written by ${this.title} and year= ${year} years.`;
//  };
//   var maga =  new magazine ("OOP", "Zaw Zaw", " 2010");
//    // console.log(maga.getMagazine());
//   //  console.log(maga.getYears());


 // inheritence // 

 //constructor
//  function magazine (title , author , year){
//   this.title = title;
//   this.author = author;
//   this.year = year; //2000 years
  
//  // prototype
//  magazine.prototype.getMagazine = function (){
//   return `this title is ${this.title} and it is written by ${this.author} produced at ${this.year} years.`;
// }; 

// magazine.prototype.getYears = function (){
//   const year = new Date().getFullYear()-this.year;
//  //  console.log(year);
//   return `this magazine is written by ${this.title} and year= ${year} years.`;
// };
//  var maga =  new magazine ("OOP", "Zaw Zaw", " 2010");

// constructor
// function News (title, author, year ,month ){
//   magazine.call(this,title, author, year); // inheritence
//   this.month= month;

// }

// News.prototype = Object.create (magazine.prototype); // inheritence
// var page = new News ( "English", "Maung Maung ", "2010", "june");
// console.log(page.getMagazine());


// class & extends // 

// class 
// class Book {
//     constructor (title, author , year ) {
//         this.title= title,
//         this.author=author;
//         this.year=year;
//     }
//     setTitle (){
//         this.title="English";
//     }
//     static show () {
//         console.log("morning");
//     }
//     greeting() {
//         console.log("good night");
        
//     }
// }
// var book1= new Book("Myanmar", "U aung ", 2000);
// // console.log(book1);
// // book1.setTitle();
// // console.log(book1);
// // book1.greeting();
// // Book.show ();


// // extends 
// class Magazine extends Book {
//     constructor (title , author , year , month){
//     super (title , author , year);
//     this.month= month;
//     }
// }

// var maga = new Magazine ("Facebook", " Aung Thein " , 2000 , " August");
// console.log(maga);
// console.log(maga.greeting());


// console.log(document);



