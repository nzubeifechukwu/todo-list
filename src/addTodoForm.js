// this.title = title;
// this.description = description;
// this.dueDate = dueDate;
// this.priority = priority; // use to assign todo to project category of `done`, `doing` or `to be done`

export function addNewToDo() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  header.innerHTML = `<h1>Add New Todo</h1>`;
  body.appendChild(header);
}
