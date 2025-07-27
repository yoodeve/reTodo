'use strict';

const todoKey = "todos";
const todoList = [];

function addTodo() {
    const todoText = document.getElementById("todo-input").value;
    const todoItem = {text: todoText, status: "idle"};
    todoList.push(todoItem);
    console.log(todoItem);

    localStorage.setItem(todoKey, JSON.stringify(todoList)); 
    console.log(window.localStorage.getItem("todos"));
}


function deleteTodo(event) {
    alert(event);
}