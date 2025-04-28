class todo {
  constructor(title, description, dueDate, priority /*notes, checkList*/) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; // use to assign todo to project category of `done`, `doing` or `to be done`
  }
}

export const todos = [
  // new todo(
  //   "Write",
  //   "Write at least 100 words each day until the due date for the story I'm working on.",
  //   new Date(2025, 5, 30),
  //   "flexible"
  // ),
];
export const doneTodos = [];
export const doingTodos = [];
export const toBeDoneTodos = [];
