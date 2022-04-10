const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDos = [];

const TODOS_KEY = "todos";

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    // li.appendChild(span);
    // li.appendChild(button);
    button.innerText = "X";
    li.append(span, button);
    toDoList.appendChild(li);
    // append와 appendChild는 같은 기능을함
    // console.log(toDoList);
    button.addEventListener("click", deleteToDo);
}



function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //저장할 때 마치 배열 형태인 것 처럼 저장함.
}

function deleteToDo(event){
    // console.dir(event.target);
    const li = event.target.parentElement;
    li.remove(); //자신을 삭자
    // toDoList.removeChild(li); => 부모와 자식 관계를 끊음.
    // toDoList.remove(li); => li 싹다 삭제
}

function handleToDoSubmit(event){
    event.preventDefault(); //submit을 제출할 때 새로고침됨
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



////////////////////////////////////////////////////////
//강의에서 만든거
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(element => paintToDo(element));
}

// 내가 만든 함수
// function outToDo(){
//     const str = localStorage.getItem("todos");
//     const arr = str.split(",");
    
//     arr.forEach(element => {
//         paintToDo(element);
//         console.log(element);
//     });
// }
// outToDo();


// function outToDo(){
//     const arr = JSON.parse(localStorage.getItem("todos"));
//     arr.forEach(element => {
//         paintToDo(element);
//         console.log(element);
//     });
// }
// outToDo();