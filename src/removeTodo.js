import { home } from "./home";

export function removeTodo(id, todos) {
  todos.filter((todo) => todo.id !== id);
  console.log(todos);
  //   home(todos);
}
