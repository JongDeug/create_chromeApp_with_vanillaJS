const age = parseInt(prompt("How old are you?"));


if(isNaN(age)){
    prompt("you have to input number ok? fucking crazy man?");
}
else if(age < 18 && age < 50){
    console.log("You are too young.");
}
else{
    console.log("You can't")
}

