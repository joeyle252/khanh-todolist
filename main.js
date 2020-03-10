let inputValue = document.getElementById('todoInput');

let todoList = [];

let addItem = ()=>{
    let todoValue = inputValue.value;
    todoList.push(todoValue);
    render();
    // let htmlToDoArray = todoList.map((item,index)=>{
    //     return `<li> ${item} <button onclick="removeItem(${index})">x</button> </li>`
    // }).join('');

    // document.getElementById("resultArea").innerHTML = htmlToDoArray;

}
let removeItem = (index)=> {
    todoList.splice(index,1)
    render();
    
}
let render =()=>{
    let htmlToDoArray = todoList.map((item,index)=>{
        return `<li> ${item} <button onclick="removeItem(${index})">x</button> </li>`
    }).join('');
    document.getElementById("resultArea").innerHTML = htmlToDoArray;
}