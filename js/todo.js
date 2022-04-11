const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    // 아 li태그에 id값으로 주면되는구나
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
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


    //내가 작성한 함수
    // toDos.forEach(element =>{
    //     if(element.id == li.id){
    //         const index = toDos.indexOf(element);
    //         toDos.splice(index, 1);
    //         localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //     }
    //     //console.log(typeof(element.id));
    //     //console.log(typeof(li.id));
    // });  
    
    //아하 투두값을 변경시키는게 아니고 필터한값을 다시 넣어야되는구나
    //toDos = toDos.filter((items) => items.id != li.id);
    //or
    toDos = toDos.filter((items) => items.id !== parseInt(li.id));
    console.log(toDos);
}



function handleToDoSubmit(event){
    event.preventDefault(); //submit을 제출할 때 새로고침됨
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    //객체를 만드는고임
    const newToDoObj = {
        id: Date.now(),
        text : newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//x를 눌렀을 때 로컬 에서 삭제해야됨


////////////////////////////////////////////////////////
//강의에서 만든거
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
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