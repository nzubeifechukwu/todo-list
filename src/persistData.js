import {
  allTodos,
  otherTodos,
  personalTodos,
  urgentTodos,
  workTodos,
} from "./todos";

export function storeTodos() {
  localStorage.setItem("all", JSON.stringify(allTodos));
  localStorage.setItem("urgent", JSON.stringify(urgentTodos));
  localStorage.setItem("personal", JSON.stringify(personalTodos));
  localStorage.setItem("work", JSON.stringify(workTodos));
  localStorage.setItem("other", JSON.stringify(otherTodos));
}

export function getTodos() {
  if (localStorage.getItem("all")) {
    allTodos = JSON.parse(localStorage.getItem("all"));
    urgentTodos = JSON.parse(localStorage.getItem("urgent"));
    personalTodos = JSON.parse(localStorage.getItem("personal"));
    workTodos = JSON.parse(localStorage.getItem("work"));
    otherTodos = JSON.parse(localStorage.getItem("other"));
  }
}
