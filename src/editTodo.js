import { home } from "./home";

export function editTodo(id, todos) {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const days = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
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
        <label for="due-date">Due Date</label
        ><input type="date" name="due-date" id="due-date" value="${selectedTodo.dueDate.getFullYear()}-${
    months[selectedTodo.dueDate.getMonth()]
  }-${days[selectedTodo.dueDate.getDate()]}" />
      </fieldset>
      <fieldset><button type="button" id="submit">Submit</button></fieldset>
    </form>
  `;
  const titleInput = document.querySelector("#title");
  const descriptionTextarea = document.querySelector("#description");
  const dueDateInput = document.querySelector("#due-date");
  const submitButton = document.querySelector("#submit");

  // Retain previous values should in case they are not changed
  let title = titleInput.value;
  let description = descriptionTextarea.value;
  let dueDate = dueDateInput.value;

  titleInput.addEventListener("change", () => (title = titleInput.value));

  descriptionTextarea.addEventListener(
    "change",
    () => (description = descriptionTextarea.value)
  );

  dueDateInput.addEventListener("input", () => (dueDate = dueDateInput.value));

  submitButton.addEventListener("click", () => {
    selectedTodo.title = title;
    selectedTodo.description = description;
    selectedTodo.dueDate = new Date(dueDate);

    home(todos);
    console.log(todos);
  });
}
