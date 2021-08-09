function doubleIt(number) {
    return (number *= 2);
}

var myNumbers = [1, 2, 3, 4, 5];

var myDoubles = myNumbers.map(doubleIt);

console.log(myNumbers)
console.log('\n')

console.log(myDoubles)

var s = [7, 6]
var string = s.map(doubleIt);

console.log(s);
console.log('\n', string);