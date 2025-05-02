import { addNewTodo } from "./addTodoForm";
import { removeTodo } from "./removeTodo";

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
      ${
        todos.length
          ? `<div><button type="button" id="delete-all-btn">Delete All</button></div>`
          : ""
      }
      <div><button type="button" id="add-todo-btn">Add Todo</button></div>
    </main>
    <footer><small>&copy; Nzube Ifechukwu</small></footer>`;

  const addTodoButton = document.querySelector("#add-todo-btn");
  addTodoButton.onclick = addNewTodo;
  // if (todos.length) {
  //   const removeButton = document.querySelector(".remove");
  //   const removeOneTodo = () => {
  //     console.log(removeButton);
  //     removeTodo(removeButton.id, todos);
  //   };
  //   removeButton.onclick = removeOneTodo;
  // }
}
