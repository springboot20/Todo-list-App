const localstorage = (todos, todoItems, todoInput) => {
  todos = localStorage.getItem("todos");
  if (todos === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todos);
  }
  todoItems.push(todoInput.value);
  todoInput.value = "";
  localStorage.setItem("todos", JSON.stringify(todoItems));
  return todoItems;
};

export default localstorage;
