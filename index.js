// 1.ways to print in javascript
//console.log("hello world");
//document.write("i wrote on screen");
//alert("me");

// 2.javascript console API
// console.log("hello ratnesh", 5 + 6, "another log");
// console.warn("this is a warning");
// console.error("this is a error");


// 3.JavaScript Variables
// IMP USE LET INSTEAD OF VAR
// VARAIBLES IN JAVASCRIPT VAR, LET, CONST
// what are variables? - containers to store data value
/* at a very high level, there are two types of data types
they are
1.primitive data types --> undefined, null, numbers, strings, boolean, symbol
2.refrence data types --> arrays, objects
 */

// 4. Data types in javascript

/* at a very high level, there are two types of data types
they are
1.primitive data types --> undefined, null, numbers, strings, boolean, symbol
2.refrence data types --> arrays, objects
 */

//PRIMITIVE DATATYPES

// number
// var num1 = 3;
// var num2 = 5;


// String
// var str1 = "this is string";
// var str2 = "this is also a string";


//booleans
// var a = true;
// var b = false;


//undefined
// var und;
// --> console.log(und); - undefined 
// var und = undefined;
// --> console.log("und"); - undefined
// --> console.log("undefined"); - undefined    


//null
// var n = null;



//NON-PRIMITIVE DATATYPES

//arrays
// var arr = [1,2,3,4,5] 


//objects
// var marks = {
//     ratnesh : 99.99,
//     advait : 99.99,
//     shubham : 88 ,
// }

//  5.OPERATORS IN JAVA 

// 1. Arthemetic operators(+,-,*,/)
// 2. Assignment Operators(=,+=,-=,*=,/=)
// 3. Comparison Operators(==,>=,<=)
// 4. Logical Operators(&&,||,!)

//  6.FUNCTIONS IN JAVASCRIPT
// based on dry principle (DO NOT REPEAT  YOURSELF)
// function avg (a,b){
//     c = (a+b)/2;
//     return c;
// }
// c1 = avg (5,5);
// console.log(c1);

// 7.CONDITIONAL IN JAVA SCRIPT
// var age = 18
// if (age > 98 ) {
//     console.log("you are a kid");
    
// } else {
//     console.log("you are not a kid");
// }
// if statement 
// if-else statement 
// if - else ladder statement 


// 8.LOOPS IN JAVASCRIPT
// for Loop 
// foreach Loop 
// while loop 
// do-while Loop 


// 9. BREAK STATEMENT AND CONTINUE STATEMENT
// break(execution ko stop karo)
// continue(executiion ko ek jage pe skip karo and agle se continue karo)

// 10.METHODS IN JAVASCRIPT
// let arr = ["ratnesh","advait",25,44,true];
// // console.log(arr.length);
// arr.pop();
// arr.push("kavla")
// arr.shift();
// arr.unshift("radha");
// console.log(arr);

// 11.STRING METHODS IN JAVASCRIPT  
// let String = "ratnesh is a good boy";
// console.log(String.length);
// console.log(String.indexOf("boy"));
// console.log(String.slice(0,4));
// console.log(String.replace("good", "fuck"));    


// 12.JAVASCRIPT DATES 
// let mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth( ));

// 13.DOM Manipulationn
let a = document.getElementById("click");
// console.log(a);

let aclass = document.getElementsByClassName("container");
// console.log(aclass);

// aclass[0].style.background = "yellow";
aclass[0].classList.add("bg-primary");
aclass[0].classList.add("textsuccess");

// console.log(a.innerHTML);
// console.log(a.innerText);

// console.log(aclass[0].innerHTML);
// console.log(aclass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdelement = document.createElement("p");
createdelement.innerText = "this is a created para";
tn[0].appendChild(createdelement);
createdelement1 = document.createElement("b");
createdelement1.innerText = "this is a created bold";
tn[0].replaceChild(createdelement1, createdelement);