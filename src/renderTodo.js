import { editTodo } from "./editTodo";
import { home } from "./home";

export function renderTodos(todos, section, months) {
  section.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoArticle = document.createElement("article");
    todoArticle.innerHTML = `<h2>${todo.title}</h2><p>${
      todo.description
    }</p><p>${todo.dueDate.getDate()} ${
      months[todo.dueDate.getMonth()]
    }, ${todo.dueDate.getFullYear()}</p><p>${todo.priority}</p>`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      todos.splice(index, 1);
      home(todos);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      editTodo(todo.id, todos);
    });

    todoArticle.appendChild(removeButton);
    todoArticle.appendChild(editButton);
    section.appendChild(todoArticle);
  });
}
