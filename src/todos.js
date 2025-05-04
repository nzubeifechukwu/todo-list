export class Todo {
  constructor(title, description, dueDate, priority, type) {
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate)
    this.priority = priority;
    this.type = type; // Use to group todo into project type of 'personal', 'work' or 'other'
  }
}

export let allTodos = [];
export let personalTodos = [];
export let workTodos = [];
export let otherTodos = [];
export let urgentTodos = [];
