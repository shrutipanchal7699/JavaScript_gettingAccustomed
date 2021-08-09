var myNum = 32;
var myResult = "Success";


function randomizer(limit) {
    var randomNumber = Math.floor(Math.random() * limit);

    var myNum = randomNumber;

    console.log("myNum is", myNum);
    //console.log("Global myNum is", this.myNum);

    console.log("Out result is", myResult);
    return myNum;
}

console.log('\n')
randomizer(10);
console.log(myNum);

