//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Liseners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  //Prevent form from Submitting
  event.preventDefault();
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trachButton = document.createElement("button");
  trachButton.innerHTML = '<i class="fas fa-trash"></i>';
  trachButton.classList.add("complete-btn");
  todoDiv.appendChild(trachButton);
  //APPEND To List
  todoList.appendChild(todoDiv);
}
