"use strict";
//equality and inequality text 1
console.log("equality test with strings:", "apple" === "apple");
//equality and inequality text 1
console.log("equality test with strings:", "apple" != "orange");
//test using the lower case function
console.log("lowercase function test:", "HI,SABILA".toLowerCase() === "hi,sabila");
//numerical test involving equality and inequality
console.log("equality test with number:", 22 === 22);
//numerical test involving equality and inequality
console.log("equality test with number:", "21" != "22");
//greater than and less than
console.log("greater than test:", 56 > 43);
console.log("less than test:", 78 < 90);
//greater than and equal to test
console.log("greater than and equal to test:", 66 >= 66);
//less than and equal to test
console.log("less than and equal to test", 23 <= 24);
//test using "and"  operator
console.log("and operator test", 5 === 5 && 10 > 5);
//test using  "or" operator
console.log("or operator test", 5 === 5 || false);
//test whether an item is in a array
const fruit = ['apple', 'mango', 'banana'];
console.log('test "mango" in the array:', fruit.includes("mango"));
//test whether an item is  not in a array
const fruits = ['apple', 'mango', 'banana'];
console.log('test "strawberry" in the array:', fruits.includes("strawberry"));
