import { addNewTodo } from "./addTodoForm";
import { renderTodos } from "./renderTodo";

export function home(todos) {
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

  body.innerHTML = `<header>
      <h1>Todo List</h1>
      <nav>
        <button type="button">Personal</button><button type="button">Work</button
        ><button type="button">Other</button
        ><button type="button">All</button>
      </nav>
    </header>
    <main>
      <section id="todos">
      </section>
      <div><button type="button" id="add-todo-btn">Add Todo</button></div>
    </main>
    <footer><small>&copy; Nzube Ifechukwu</small></footer>`;

  const todosSection = document.querySelector("#todos");

  if (todos.length) {
    renderTodos(todos, todosSection, months);
  } else {
    todosSection.innerHTML = "<h2>You have no todos.</h2>";
  }

  const addTodoButton = document.querySelector("#add-todo-btn");
  addTodoButton.onclick = addNewTodo;
}
