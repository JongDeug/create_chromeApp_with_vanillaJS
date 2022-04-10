const title = document.querySelector(".hello h1:first-child");
// let flag = 0;
// function handleTitleClick(){
    
//     if(flag == 0){
//         title.style.color = "blue";
//         flag = 1;
//     } else if(flag == 1){
//         title.style.color = "black";
//         flag = 0;
//     }
// }
// title.addEventListener("click", handleTitleClick);

console.log(title.className);
function handleMouseEnter(){
    title.innerHTML = "mouse is here";
}

function handleMouseLeave(){
    title.innerHTML = "mouse is gone";
}

function handleMouseDown(){
    title.innerHTML = "mouse is down";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

title.onmousedown = handleMouseDown;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("click", function(){
    const clickClass = "active";

    // if(title.classList.contains(clickClass)){
    //     title.classList.remove(clickClass);
    // }else {
    //     title.classList.add(clickClass);
    // }
    // console.log(title.className);
    title.classList.toggle("active");
})


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", function(){
    alert("you copy is detected!")
})
window.addEventListener("offline", function(){
    this.alert("SOS no WIFI");
})
window.addEventListener("online", function(){
    this.alert("WIFI is connected");
})


console.dir(title);