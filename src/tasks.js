// js/tasks.js
import { STORAGE_KEYS } from "./utils.js";

export function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage write failed", e);
  }
}

export function addTask(tasks, newTask, save = true) {
  const next = [newTask, ...tasks];
  if (save) saveToStorage(STORAGE_KEYS.tasks, next);
  return next;
}

export function deleteTask(tasks, taskId, save = true) {
  const next = tasks.filter((t) => t.id !== taskId);
  if (save) saveToStorage(STORAGE_KEYS.tasks, next);
  return next;
}

export function updateTask(tasks, taskId, newText, save = true) {
  const next = tasks.map((t) =>
    t.id === taskId ? { ...t, text: newText } : t
  );
  if (save) saveToStorage(STORAGE_KEYS.tasks, next);
  return next;
}

export function completeTask(tasks, completedTasks, taskId, save = true) {
  const idx = tasks.findIndex((t) => t.id === taskId);
  if (idx === -1) return { tasks, completedTasks };
  const [task] = tasks.slice(idx, idx + 1);
  const nextTasks = tasks.slice(0, idx).concat(tasks.slice(idx + 1));
  const nextCompleted = [
    { ...task, completedAt: Date.now() },
    ...completedTasks,
  ];
  if (save) {
    saveToStorage(STORAGE_KEYS.tasks, nextTasks);
    saveToStorage(STORAGE_KEYS.completed, nextCompleted);
  }
  return { tasks: nextTasks, completedTasks: nextCompleted };
}
