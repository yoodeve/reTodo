'use strict';

const todoKey = "todos";
let todoList=[];
const todoListlocalSTRGArray = JSON.parse(localStorage.getItem(todoKey));

const todoMainInput = document.querySelector("#todo-input");
const deleteBtn = document.querySelector(".delete-todo");
const todoDOM = document.querySelector("#todo-item");
const todoContainer = document.querySelector("#todo-list ul");
const todoCheckbox = document.querySelector("#todoCheck");

const idKey = "lastId";
let todoId = parseInt(localStorage.getItem(idKey)) || 0;

function renderTodo() {
  todoContainer.innerHTML = "";
  todoList.forEach(e => {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" ${e.status === "done" ? "checked" : ""} onchange="updateTodo(this)" id="todo-${e.todoId}">
        <label for="todo-${e.todoId}">${e.text}</label>
        <button onclick="deleteTodo(this)" class="delete-todo" data-id="${e.todoId}">Delete</button>
    `;
    todoContainer.appendChild(li);
  });
}

function loadTodos() {
  const saved = localStorage.getItem(todoKey);
  if (saved) {
    todoList = JSON.parse(saved);
  }
  renderTodo();
}


loadTodos();

function addTodo() {
    const todoText = document.getElementById("todo-input").value;
    const todoItem = {todoId: todoId++, text: todoText, status: "idle"};
    todoList.push(todoItem);
    localStorage.setItem(todoKey, JSON.stringify(todoList)); 
    localStorage.setItem(idKey, todoId);
    renderTodo();
}


function updateTodo(dom) {
  const id = parseInt(dom.id.replace("todo-", ""));
  
  todoList = todoList.map(todo => {
    if (todo.todoId === id) {
      return {
        ...todo,
        status: dom.checked ? "done" : "idle"
      };
    }
    return todo;
  });
  
  localStorage.setItem(todoKey, JSON.stringify(todoList));
}

function deleteTodo(dom) {
  const domId = parseInt(dom.dataset.id, 10);
  todoList = todoList.filter(todo => {
    return todo.todoId !== domId});
  localStorage.setItem(todoKey, JSON.stringify(todoList));
  renderTodo();
}

deleteBtn?.addEventListener("click", (e)=>deleteTodo(e.target.parentNode));

// function changeContentsByNav() {

// }