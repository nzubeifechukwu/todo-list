export function home(todos) {
  const body = document.querySelector("body");

  body.innerHTML = `<header>
      <h1>Todo List</h1>
      <nav>
        <button type="button">Done</button><button type="button">Doing</button
        ><button type="button">To Be Done</button
        ><button type="button">All</button>
      </nav>
    </header>
    <main>
      <section id="todos">${
        todos.length
          ? todos.map((todo) => {
              return `<h2>${todo.title}</h2><p>${todo.description}</p><p>${todo.dueDate}</p><p>${todo.priority}</p>`;
            })
          : `<p>You have no todos</p>`
      }</section>
      <button type="button" id="add-todo-btn">Add Todo</button>
    </main>
    <footer><small>&copy; Nzube Ifechukwu</small></footer>`;
}
