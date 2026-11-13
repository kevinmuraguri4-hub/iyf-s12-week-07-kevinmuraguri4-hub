export function addTodo(todos, text, id = Date.now()) {
  const cleanText = text.trim();
  if (!cleanText) {
    return todos;
  }
  return [...todos, { id, text: cleanText, completed: false, createdAt: new Date().toISOString() }];
}

export function toggleTodo(todos, id) {
  return todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

export function filterTodos(todos, filter) {
  if (filter === "active") {
    return todos.filter((todo) => !todo.completed);
  }
  if (filter === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  return [...todos];
}

export function countActiveTodos(todos) {
  return todos.filter((todo) => !todo.completed).length;
}

export function clearCompletedTodos(todos) {
  return todos.filter((todo) => !todo.completed);
}
