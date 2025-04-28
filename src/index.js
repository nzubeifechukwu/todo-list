import { addNewToDo } from "./addTodoForm";
import { home } from "./home";
import "./styles.css";
import { allTodos, doingTodos, doneTodos, toBeDoneTodos } from "./todos";

// Initial render
home(allTodos);

const addTodoButton = document.querySelector("#add-todo-btn");

addTodoButton.onclick = addNewToDo;
