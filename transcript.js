var string1 = "Hello my name is hruti";
var string2 = "hello my name is SHRUTI";
var string3 = 'hi my name is sruti';
var string4 = 'Helly my name is Shruti';

var testing = /hruti$/i;  //case insensitive

var testing2 = /6/;
var num1 = 1;
let num2 = 6;

console.log(testing.test(string1));
console.log(testing.test(string2));
console.log(testing.test(string3));



console.log('\n');
console.log(testing2.test(num2));
console.log(testing2.test(num1));
