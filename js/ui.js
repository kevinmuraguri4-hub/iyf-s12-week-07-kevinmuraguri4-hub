import { filterTodos, countActiveTodos } from "./todo-logic.js";

const todoList = document.querySelector("#todo-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll("[data-filter]");

export function render(state, actions) {
  const visibleTodos = filterTodos(state.todos, state.filter);
  todoList.replaceChildren();

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = todo.completed ? "todo-item completed" : "todo-item";
    item.dataset.id = String(todo.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `Mark ${todo.text} as ${todo.completed ? "active" : "completed"}`);
    checkbox.addEventListener("change", () => actions.toggle(Number(item.dataset.id)));

    const label = document.createElement("label");
    label.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);
    deleteButton.addEventListener("click", () => actions.remove(Number(item.dataset.id)));

    item.append(checkbox, label, deleteButton);
    todoList.append(item);
  });

  taskCount.textContent = `${countActiveTodos(state.todos)} tasks left`;
  emptyState.hidden = visibleTodos.length > 0;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === state.filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

export function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  const themeButton = document.querySelector("#theme-toggle");
  themeButton.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
}
