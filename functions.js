function speak() {
    console.log('Arfff');
}

speak();

//fuddify('yello yello');


console.log(speakSomething('hey hey', 5));

function speakSomething(what, howMany) {
    var what = (typeof what !== 'undefined') ? what : 'Default speech';
    var howMany = (typeof howMany !== 'undefined') ? howMany : 5;

    for (let i = 0; i < howMany; i++)
        console.log(what + '( ' + i + ' )');
}

console.log(speakSomething(5));

var obj = {
    sayHello: function () {
        console.log("Hello");
    }
};

obj.sayHello();