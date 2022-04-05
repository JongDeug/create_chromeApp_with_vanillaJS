function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}

plus(50, 3);
divide(98, 20);

const player = {
    name: "jong",
    sayHello: function(name){
        console.log("hello! my name is " + name);
    }
};
console.log("");
player.sayHello("jong");