import { describe, expect, it } from "vitest";
import { addTodo, toggleTodo, deleteTodo, filterTodos, countActiveTodos, clearCompletedTodos } from "../js/todo-logic.js";

const sampleTodos = [
  { id: 1, text: "Learn JavaScript", completed: false },
  { id: 2, text: "Practise testing", completed: true },
];

describe("todo logic", () => {
  it("adds a task with trimmed text without changing the original array", () => {
    const original = [...sampleTodos];
    const result = addTodo(sampleTodos, "  Build a project  ", 3);
    expect(result).toHaveLength(3);
    expect(result[2].text).toBe("Build a project");
    expect(sampleTodos).toEqual(original);
  });

  it("does not add empty text", () => {
    expect(addTodo(sampleTodos, "   ")).toBe(sampleTodos);
  });

  it("toggles the completed state", () => {
    expect(toggleTodo(sampleTodos, 1)[0].completed).toBe(true);
  });

  it("does not change a task when the id is missing", () => {
    expect(toggleTodo(sampleTodos, 99)).toEqual(sampleTodos);
  });

  it("deletes only the task with the matching id", () => {
    expect(deleteTodo(sampleTodos, 1)).toEqual([sampleTodos[1]]);
  });

  it("filters active and completed tasks", () => {
    expect(filterTodos(sampleTodos, "active")).toEqual([sampleTodos[0]]);
    expect(filterTodos(sampleTodos, "completed")).toEqual([sampleTodos[1]]);
  });

  it("counts active tasks and handles an empty list", () => {
    expect(countActiveTodos(sampleTodos)).toBe(1);
    expect(countActiveTodos([])).toBe(0);
  });

  it("clears completed tasks", () => {
    expect(clearCompletedTodos(sampleTodos)).toEqual([sampleTodos[0]]);
  });
});
