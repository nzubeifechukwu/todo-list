import { home } from "./home";

export function editTodo(id, todos) {
  const body = document.querySelector("body");
  const selectedTodo = todos.find((todo) => id === todo.id);
  body.innerHTML = `
    <h1>Edit Todo</h1>
    <form>
      <fieldset>
        <label for="title">Title</label
        ><input type="text" name="title" id="title" value="${
          selectedTodo.title
        }" />
        <label for="description">Description</label
        ><input type="text" name="description" id="description" value="${
          selectedTodo.description
        }" />
        <label for="dueDate">Due Date</label
        ><input type="date" name="dueDate" id="dueDate" value="${selectedTodo.dueDate.getFullYear()}-${selectedTodo.dueDate.getMonth()}-${selectedTodo.dueDate.getDate()}" />
      </fieldset>
    </form>
  `;
  // body.innerHTML =
  home(todos);
}
