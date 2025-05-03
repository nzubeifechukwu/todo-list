import { addNewTodo } from "./addTodo";
import { renderTodos, renderTodosByType } from "./renderTodos";

export function home(todos, todosType = "") {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const body = document.querySelector("body");

  body.innerHTML = `
    <header>
      <h1>Todo List</h1>
      <nav>
        <button type="button" id="personal-btn">Personal</button>
        <button type="button" id="work-btn">Work</button>
        <button type="button" id="other-btn">Other</button>
        <button type="button" id="urgent-btn">Urgent</button>
        <button type="button" id="all-btn">All</button>
      </nav>
    </header>
    <main>
      <section id="todos">
      </section>
      <div>
        <button type="button" id="add-todo-btn">Add Todo</button>
      </div>
    </main>
    <footer><small>&copy; Nzube Ifechukwu</small></footer>
  `;

  const todosSection = document.querySelector("#todos");

  if (todos.length) {
    renderTodos(todos, todosSection, months);
  } else {
    todosSection.innerHTML = `<h2>You have no ${todosType} todos.</h2>`;
  }

  const addTodoButton = document.querySelector("#add-todo-btn");
  addTodoButton.onclick = addNewTodo;

  renderTodosByType();
}
