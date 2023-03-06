let todoList = [];

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  
  if (todoInput.value !== "") {
    const todoItem = {
      id: todoList.length + 1,
      text: todoInput.value
    };
    todoList.push(todoItem);
    
    displayTodoList();
    
    todoInput.value = "";
  }
  
  todoInput.focus();
}

function editTodoItem(id) {
  const todoItem = todoList.find((item) => item.id === id);
  const newText = prompt("Enter the new text for this todo item", todoItem.text);
  
  if (newText !== null && newText !== "") {
    todoItem.text = newText;
    displayTodoList();
  }
}

function deleteTodoItem(id) {
  todoList = todoList.filter((item) => item.id !== id);
  displayTodoList();
}

function displayTodoList() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";
  
  for (const todoItem of todoList) {
    const todoElement = document.createElement("li");
    const todoText = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    
    todoText.innerText = todoItem.text;
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";
    
    editButton.addEventListener("click", () => editTodoItem(todoItem.id));
    deleteButton.addEventListener("click", () => deleteTodoItem(todoItem.id));
    
    todoElement.appendChild(todoText);
    todoElement.appendChild(editButton);
    todoElement.appendChild(deleteButton);
    
    todoElement.setAttribute("data-id", todoItem.id);
    
    todoListElement.appendChild(todoElement);
  }
}
