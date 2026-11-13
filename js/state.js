import { addTodo as addTodoItem, toggleTodo as toggleTodoItem, deleteTodo as deleteTodoItem, clearCompletedTodos } from "./todo-logic.js";
import { loadTodos, saveTodos, loadFilter, saveFilter, loadTheme, saveTheme } from "./storage.js";

export const state = {
  todos: loadTodos(),
  filter: loadFilter(),
  theme: loadTheme(),
};

function persistTodos() {
  saveTodos(state.todos);
}

export function addTask(text) {
  state.todos = addTodoItem(state.todos, text);
  persistTodos();
}

export function toggleTask(id) {
  state.todos = toggleTodoItem(state.todos, id);
  persistTodos();
}

export function deleteTask(id) {
  state.todos = deleteTodoItem(state.todos, id);
  persistTodos();
}

export function clearCompleted() {
  state.todos = clearCompletedTodos(state.todos);
  persistTodos();
}

export function setFilter(filter) {
  state.filter = filter;
  saveFilter(filter);
}

export function setTheme(theme) {
  state.theme = theme;
  saveTheme(theme);
}
