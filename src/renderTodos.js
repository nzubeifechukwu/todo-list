import { editTodo } from "./editTodo";
import { home } from "./home";
import {
  allTodos,
  personalTodos,
  workTodos,
  otherTodos,
  urgentTodos,
} from "./todos";

export function renderTodos(todos, section, months) {
  section.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoArticle = document.createElement("article");
    todoArticle.innerHTML = `
      <h2>${todo.title}</h2>
      <p>${todo.description}</p>
      <p>${todo.dueDate.getDate()} ${
      months[todo.dueDate.getMonth()]
    }, ${todo.dueDate.getFullYear()}</p>
      <p>${todo.priority}</p>
      <p>${todo.type}</p>
    `;

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

export function renderTodosByType() {
  const personalButton = document.querySelector("#personal-btn");
  const workButton = document.querySelector("#work-btn");
  const otherButton = document.querySelector("#other-btn");
  const allButton = document.querySelector("#all-btn");
  const urgentButton = document.querySelector("#urgent-btn");

  allButton.addEventListener("click", () => home(allTodos));
  personalButton.addEventListener("click", () =>
    home(personalTodos, "personal")
  );
  workButton.addEventListener("click", () => home(workTodos, "work"));
  otherButton.addEventListener("click", () => home(otherTodos, "unclassified"));
  urgentButton.addEventListener("click", () => home(urgentTodos, "urgent"));
}
