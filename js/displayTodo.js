let display = document.getElementById("display");
let saveIndex = document.querySelector(".saveIndex");
const todoInput = document.querySelector(".todoInput"),
  addBtn = document.querySelector(".addBtn"),
  saveBtn = document.querySelector(".saveBtn");

const displayTodo = (todos, todoItems) => {
  let row = document.createElement("tr");
  todos = localStorage.getItem("todos");

  if (todos === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todos);
  }

  todoItems.forEach((todo, ind) => {
    row.innerHTML = `
          <td>${ind}</td>
          <td class='bg-primary'>${todo}</td>
          <td>
               <button type='button' class='btn btn-danger deleteBtn'><i class='fa fa-trash'></i></button>
               <button type='button' class='btn btn-warning mx-2 editBtn'><i class='fa fa-edit'></i></button>
          </td>
     `;

    row
      .querySelector(".deleteBtn")
      .addEventListener("click", (todos, todoItems) => {
        (todos = localStorage.getItem("todos")),
          (todoItems = JSON.parse(todos));
        todoItems.splice(ind, 1);
        localStorage.setItem("todos", JSON.stringify(todoItems));
        row.innerHTML = " ";
      });

    row.querySelector(".editBtn").addEventListener("click", () => {
      saveIndex.value = ind;
      todos = localStorage.getItem("todos");
      todoItems = JSON.parse(todos);
      todoInput.value = todoItems[ind];
      addBtn.style.display = "none";
      saveBtn.style.display = "block";
      localStorage.setItem("todos", JSON.stringify(todoItems));
    });
  });

  const saveFunc = () => {
    todos = localStorage.getItem("todos");
    todoItems = JSON.parse(todos);

    let id = saveIndex.value;
    todoItems[id] = todoInput.value;
    console.log(id);
    console.log(todoItems[id])
    localStorage.setItem("todos", JSON.stringify(todoItems));
  };
  saveBtn.addEventListener("click", saveFunc);

  display.appendChild(row);
};
export default displayTodo;
