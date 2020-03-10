
let inputValue = document.getElementById('todoInput');
let allButtonValue = document.getElementById('todoInput');
let countToDoList = document.getElementById('totalToDoList');

// when call addItem => sum of value of inputValue

// console.log(sumOfToTalToDoListValue);

let todoList = [];
let sumOfToDoValue = [];

let addItem = ()=>{
    let todoValue = inputValue.value;
    todoList.push({
        text: todoValue,
        isDone: false
        })
        console.log(todoList)
    let sumOfToDoValue = todoList.length;
    countToDoList.innerHTML = `${sumOfToDoValue}`;
    console.log(sumOfToDoValue);
    render();
}
let removeItem = (index)=> {
    todoList.splice(index,1)
    render();
}

let render =()=>{
    let htmlToDoArray = todoList.map((item,index)=>{
        return `<li> ${item.text} <button onclick="removeItem(${index})">x</button> </li>`
    }).join('');
    document.getElementById("resultArea").innerHTML = htmlToDoArray;
}