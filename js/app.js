import { state, addTask, toggleTask, deleteTask, clearCompleted, setFilter, setTheme } from "./state.js";
import { render, applyTheme } from "./ui.js";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const formMessage = document.querySelector("#form-message");
const themeButton = document.querySelector("#theme-toggle");

function updateUI() {
  render(state, { toggle: toggleTask, remove: deleteTask });
  applyTheme(state.theme);
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (!taskText) {
    formMessage.textContent = "Please enter a task before adding it.";
    return;
  }
  addTask(taskText);
  todoInput.value = "";
  formMessage.textContent = "Task added.";
  updateUI();
  todoInput.focus();
});

document.querySelector(".filters").addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  if (!filterButton) {
    return;
  }
  setFilter(filterButton.dataset.filter);
  updateUI();
});

document.querySelector("#clear-completed").addEventListener("click", () => {
  clearCompleted();
  updateUI();
});

document.querySelector("#clear-all").addEventListener("click", () => {
  if (state.todos.length === 0 || !window.confirm("Delete all tasks?")) {
    return;
  }
  state.todos = [];
  updateUI();
  // Save through the same state action path.
  localStorage.setItem("week7_todos", JSON.stringify(state.todos));
});

themeButton.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
  applyTheme(state.theme);
});

updateUI();
