const TODO_KEY = "week7_todos";
const FILTER_KEY = "week7_filter";
const THEME_KEY = "week7_theme";

function readJSON(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue === null ? fallback : JSON.parse(savedValue);
  } catch {
    return fallback;
  }
}

export function loadTodos() {
  const savedTodos = readJSON(TODO_KEY, []);
  return Array.isArray(savedTodos) ? savedTodos : [];
}

export function saveTodos(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

export function loadFilter() {
  const savedFilter = readJSON(FILTER_KEY, "all");
  return ["all", "active", "completed"].includes(savedFilter) ? savedFilter : "all";
}

export function saveFilter(filter) {
  localStorage.setItem(FILTER_KEY, JSON.stringify(filter));
}

export function loadTheme() {
  return readJSON(THEME_KEY, "light") === "dark" ? "dark" : "light";
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, JSON.stringify(theme));
}
