const clock = document.querySelector("#clock");


// let minutes = 0;
// let hours = 0;
function getClock(){
    // minutes += 1;
    // clock.innerHTML = `${Math.floor(minutes/60)} : ${minutes%60}`;
    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    // clock.innerHTML = 
    //     `${hours < 10 ? `${hours.toString().padStart(2,"0")}` : hours} : 
    //     ${minutes < 10 ? `${minutes.toString().padStart(2,"0")}` : minutes} : 
    //     ${seconds < 10 ? `${seconds.toString().padStart(2,"0")}` : seconds}`;
    // 이렇게 할 필요가 없네!! padStart에 maxlength를 정해주게 되면 어차피 두 자리 수 일 때는 0이 안나타남

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = 
        `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);