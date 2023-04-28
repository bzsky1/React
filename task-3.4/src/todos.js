import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    const shortTodos = todos.splice(0, 11)
    shortTodos.map((todo) => {
        todo.title = bigFirstLetter(todo.title.slice(0, 30))
    })
    return shortTodos
}

export async function getTodos(query) {
    let todos = await fetchData()
    if (!todos) todos = []
    if (query) {
        todos = matchSorter(todos, query)
    }
    set(todos)
    return todos.sort(sortBy('createdAt'))
}

export async function createTodo() {
    let id = Math.random().toString(36).substring(3,9)
    let title = 'Random Todo'
    let todo = { id, createdAt: Date.now(), title }
    let todos = await getTodos()
    todos.unshift(todo)
    set(todos)
    return todo
}

const set = (todos) => {
    return localStorage.setItem('todos', JSON.stringify(todos))
}