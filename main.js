
let inputValue = document.getElementById('todoInput');

let allButtonValue = document.getElementById('todoInput');

let countToDoList = document.getElementById('totalToDoList');

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

let toggle =(index)=>{
     todoList[index].isDone = !(todoList[index].isDone);
     console.log("khanh",todoList);
     render();
}

// let undone = ()=>{
//     let isDone = todoList[index].isDone;
//     let undoneArray = todoList.filter(index){
//         if (isDone === false){
//             return true
//         } return false
//     }
//     }


let render =()=>{
     
    let htmlToDoArray = todoList.map((item,index)=>{
        if(item.isDone == false){
            return `<li onclick="toggle(${index})"> ${item.text} <button onclick="removeItem(${index})">x</button> </li>`
        } else {
            return  `<li onclick="toggle(${index})"> ${item.text} <button onclick="removeItem(${index})">x</button> </li>`.strike();
        }
    }).join('');
    document.getElementById("resultArea").innerHTML = htmlToDoArray;
}
