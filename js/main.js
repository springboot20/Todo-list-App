import localstorage from "./localStore.js";
import displayTodo from "./displayTodo.js";

(function () {
  const todoInput = document.querySelector(".todoInput"),
    addBtn = document.querySelector(".addBtn");

  let todos;
  let todoItems = [];

  addBtn.addEventListener("click", () => {
    localstorage(todos, todoItems, todoInput);
    displayTodo(todos, todoItems);
  });

})();
