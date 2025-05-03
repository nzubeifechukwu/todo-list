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
      <fieldset id="priority-fieldset">
      </fieldset>
      <fieldset id="type-fieldset">
      </fieldset>
      <fieldset><button type="button" id="submit">Submit</button></fieldset>
    </form>
  `;
  const priorityFieldset = document.querySelector("#priority-fieldset");
  const typeFieldset = document.querySelector("#type-fieldset");

  if (selectedTodo.priority === "Urgent") {
    priorityFieldset.innerHTML = `
      <p>Priority</p>
      <div>
        <input type="radio" name="priority" id="urgent" value="Urgent" checked /><label
          for="urgent"
        >Urgent</label>
      </div>
      <div>
        <input type="radio" name="priority" id="not-urgent" value="Not Urgent" /><label
          for="not-urgent"
        >Not Urgent</label>
      </div>
    `;
  } else {
    priorityFieldset.innerHTML = `
      <p>Priority</p>
      <div>
        <input type="radio" name="priority" id="urgent" value="Urgent" /><label
          for="urgent"
        >Urgent</label>
      </div>
      <div>
        <input type="radio" name="priority" id="not-urgent" value="Not Urgent" checked /><label
          for="not-urgent"
        >Not Urgent</label>
      </div>
    `;
  }

  if (selectedTodo.type === "Personal") {
    typeFieldset.innerHTML = `
      <p>Type</p>
      <div>
        <input type="radio" name="type" id="personal" value="Personal" checked /><label
          for="personal"
        >Personal</label>
      </div>
      <div>
        <input type="radio" name="type" id="work" value="Work" /><label
          for="work"
        >Work</label>
      </div>
      <div>
        <input type="radio" name="type" id="other" value="Other" /><label
          for="other"
        >Other</label>
      </div>
    `;
  } else if (selectedTodo.type === "Work") {
    typeFieldset.innerHTML = `
      <p>Type</p>
      <div>
        <input type="radio" name="type" id="personal" value="Personal" /><label
          for="personal"
        >Personal</label>
      </div>
      <div>
        <input type="radio" name="type" id="work" value="Work" checked /><label
          for="work"
        >Work</label>
      </div>
      <div>
        <input type="radio" name="type" id="other" value="Other" /><label
          for="other"
        >Other</label>
      </div>
    `;
  } else {
    typeFieldset.innerHTML = `
      <p>Type</p>
      <div>
        <input type="radio" name="type" id="personal" value="Personal" /><label
          for="personal"
        >Personal</label>
      </div>
      <div>
        <input type="radio" name="type" id="work" value="Work" /><label
            for="work"
        >Work</label>
      </div>
      <div>
        <input type="radio" name="type" id="other" value="Other" checked /><label
          for="other"
        >Other</label>
      </div>
    `;
  }
  const titleInput = document.querySelector("#title");
  const descriptionTextarea = document.querySelector("#description");
  const dueDateInput = document.querySelector("#due-date");
  const urgentRadio = document.querySelector("#urgent");
  const notUrgentRadio = document.querySelector("#not-urgent");
  const personalRadio = document.querySelector("#personal");
  const workRadio = document.querySelector("#work");
  const otherRadio = document.querySelector("#other");
  const submitButton = document.querySelector("#submit");

  // Retain previous values should in case they are not changed
  let title = titleInput.value;
  let description = descriptionTextarea.value;
  let dueDate = dueDateInput.value;
  let priority = document.querySelector('input[name="priority"]:checked').value; // Get value of previously checked radio button
  let type = document.querySelector('input[name="type"]:checked').value; // Get value of previously checked radio button

  titleInput.addEventListener(
    "change",
    () => (title = titleInput.value.trim())
  );

  descriptionTextarea.addEventListener(
    "change",
    () => (description = descriptionTextarea.value.trim())
  );

  dueDateInput.addEventListener("input", () => (dueDate = dueDateInput.value));

  urgentRadio.addEventListener("change", () => (priority = urgentRadio.value));

  notUrgentRadio.addEventListener(
    "change",
    () => (priority = notUrgentRadio.value)
  );

  personalRadio.addEventListener("change", () => (type = personalRadio.value));

  workRadio.addEventListener("change", () => (type = workRadio.value));

  otherRadio.addEventListener("change", () => (type = otherRadio.value));

  submitButton.addEventListener("click", () => {
    selectedTodo.title = title;
    selectedTodo.description = description;
    selectedTodo.dueDate = new Date(dueDate);
    selectedTodo.priority = priority;
    selectedTodo.type = type;

    home(todos);
  });
}
