
let inputValue = document.getElementById('todoInput');

// let allButtonValue = document.getElementById('todoInput');

// let countToDoList = document.getElementById('totalToDoList');

let todoList = [];
let selected = "total";

let addItem = () => {
    let todoValue = inputValue.value;
    todoList.push({
        text: todoValue,
        isDone: false
    })
    saveData();
    render();
}
let removeItem = (index, event) => {
    // event.stopPropagation();
    todoList.splice(index, 1)
    render();
}
let toggle = (index) => {
    todoList[index].isDone = !(todoList[index].isDone);
    render();
}
let done = () => {
    const doneArr = todoList.filter((value) => {
        if (value.isDone === true) {
            return true
        } else {
            return false
        }
    })
    return doneArr.length;
}
let unDone = () => {
    const unDoneArr = todoList.filter((value) => {
        if (value.isDone === false) {
            return true
        } else {
            return false
        }
    })
    return unDoneArr.length;
}
let selectTotal = () => {
    selected = "total";
    render();
}
let selectDone = () => {
    selected = "done";
    render();
}
let selectUnDone = () => {
    selected = "undone";
    render();
}

let render = () => {
    let listToRender = [];
    if (selected === "total") {
        listToRender = todoList;
    } 
    if (selected === "done") {
        listToRender = todoList.filter ((item)=> {
            if (item.isDone === true){
                return true
            } 
        })
    }
    if (selected === "undone") {
        listToRender = todoList.filter ((item)=> {
            if (item.isDone === false) {
                return true
            }
        })
    }
    let htmlToDoArray = listToRender.map((item, index) => {
        if (item.isDone == false) {
        return `<li onclick="toggle(${index})"> ${item.text}<button onclick="removeItem(${index},event)">x</button> </li>`
        } else {
            return `<li onclick="toggle(${index})"> ${item.text} <button onclick="removeItem(${index},event)">x</button> </li>`.strike();
        }
    }).join('');
    document.getElementById("resultArea").innerHTML = htmlToDoArray;
    let totalsHtml = `
    <button onclick="selectTotal()">Total</button>
    <p id="totalToDoList">${todoList.length}</p>
    <button onclick="selectUnDone()">Undone</button>
    <p>${unDone()}</p>
    <button onclick="selectDone()">Done</button>
    <p>${done()}</p>
    `;
    document.querySelector(".totalArea").innerHTML = totalsHtml;
}
let saveData = () => {
    localStorage.setItem("data", JSON.stringify(todoList));
}
let getData = () => {
    let data = localStorage.getItem("data")
    if (data == null) {
        todoList = []
    } else {
        let result = JSON.parse(data);
        todoList = result;
        render(todoList);
    }
}
getData();