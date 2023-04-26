import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getTodos(query) {
    let todos = await localforage.getItem('todos')
    if (!todos) todos = []
    if (query) {
        todos = matchSorter(todos, query)
    }
    return todos.sort(sortBy('createdAt'))
}

export async function createTodo() {
    let id = Math.random().toString(36).substring(3,9)
    let text = 'Random Todo'
    let todo = { id, createdAt: Date.now(), text }
    let todos = await getTodos()
    todos.unshift(todo)
    await set(todos)
    return todo
}

const set = (todos) => {
    return localforage.setItem('todos', todos)
}