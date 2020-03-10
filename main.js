
let inputValue = document.getElementById('todoInput');

let allButtonValue = document.getElementById('todoInput');

// let countToDoList = document.getElementById('totalToDoList');

let todoList = [];

let sumOfToDoValue = [];

let addItem = () => {
    let todoValue = inputValue.value;
    todoList.push({
        text: todoValue,
        isDone: false
    })
    
    render();
}
let removeItem = (index,event) => {
    event.stopPropagation();
    todoList.splice(index, 1)

    render();
}

let toggle = (index) => {
    todoList[index].isDone = !(todoList[index].isDone);
    console.log("khanh", todoList);
    render();
}

let done = ()=> {
    const doneArr = todoList.filter((value) => {
        if (value.isDone === true) {
            return true
        } else {
            return false
        }
    })
    return doneArr.length;
}
let unDone = ()=> {
    const unDoneArr = todoList.filter((value) => {
        if (value.isDone === false) {
            return true
        } else {
            return false
        }
    })
    return unDoneArr.length;
}

let render =()=>{
           
    let htmlToDoArray = todoList.map((item,index)=>{
        if(item.isDone == false){   
             return `<li onclick= "toggle(${index})"> ${item.text} <button onclick="removeItem(${index},event)">x</button> </li>`
        } else {
            return  `<li onclick="toggle(${index})"> ${item.text} <button onclick="removeItem(${index},event)">x</button> </li>`.strike();
        }  
    }).join('');
    document.getElementById("resultArea").innerHTML = htmlToDoArray;
    let totalsHtml = ` 
        <button onclick="allButton()">Total</button>
        <p id="totalToDoList">${todoList.length}</p>
        <button>Undone</button>
        <p>${unDone()}</p>
        <button>Done</button>
        <p>${done()}</p>
    `;
    document.querySelector(".totalArea").innerHTML = totalsHtml;
}