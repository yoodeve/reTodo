'use strict';

const todoKey = "todos";
const todoList=[];
const todoListlocalSTRGArray = JSON.parse(localStorage.getItem(todoKey));

const todoMainInput = document.querySelector("#todo-input");
const deleteBtn = document.querySelector("button.delete-todo");
const todoDOM = document.querySelector("#todo-item");
const todoContainer = document.querySelector("#todo-list ul");
let todoId = 0;

function renderTodo() {
  todoContainer.innerHTML = "";
  todoList.forEach(e => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" id="todo-${e.todoId}">
      <label for="todo-${e.todoId}">${e.text}</label>
      <button class="delete-todo" data-id="${e.todoId}">Delete</button>
    `;
    todoContainer.appendChild(li);
  });
}


function addTodo() {
    todoId++;

    const todoText = document.getElementById("todo-input").value;
    const todoItem = {todoId: todoId++, text: todoText, status: "idle"};
    todoList.push(todoItem);
    localStorage.setItem(todoKey, JSON.stringify(todoList)); 
    renderTodo()
    console.log(todoList)
}

// function deleteTodo(event) {
//     console.log(event);
// }

deleteBtn.addEventListener("click", (e)=>deleteTodo(e.target.parentNode));
