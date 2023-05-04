import { matchSorter } from "match-sorter";

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    const shortTodos = todos.splice(0, 11)
    shortTodos.map((todo) => {
        delete todo.userId
        todo.createdAt = Date.now()
        todo.title = bigFirstLetter(todo.title.slice(0, 30))
    })
    return shortTodos
}

export async function getTodos(query) {
    let todos = await JSON.parse(localStorage.getItem('todos'))
    if (todos === null) {
        let todos = await fetchData()
        if (!todos) todos = []
        if (query) {
            todos = matchSorter(todos, query)
        }
        set(todos)
    }
    return todos.sort((a, b) => {
        return b.createdAt - a.createdAt
    })
}

export async function createTodo(newTodo) {
    let id = Math.random().toString(36).substring(3,9)
    let title = newTodo.title
    let todo = { id, createdAt: Date.now(), title }
    let todos = await JSON.parse(localStorage.getItem('todos'))
    todos.unshift(todo)
    await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        if (response.status == 201) {
            set(todos)
        } else {
            alert(`Server response status: ${response.status} !`)
        }
    })
    return todo
}

export async function getTodo(id) {
    let todos = await JSON.parse(localStorage.getItem('todos'))
    let todo = todos.find((todo) => {
        return todo.id == id
    })
    return todo ?? null
}

export async function updateTodo(id, updates) {
    let todos = await JSON.parse(localStorage.getItem('todos'))
    let todo = todos.find((todo) => {
        return todo.id == id
    })
    Object.assign(todo, updates)
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            todo
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => {
        if (response.status == 200) {
            set(todos)
        } else {
            alert(`Server response status: ${response.status} !`)
        }
    })
    document.querySelector('.edit-todo-outlet').classList.remove('edit-todo-active')
    set(todos)
    return todo
}

export async function deleteTodo(id) {
    let todos = await JSON.parse(localStorage.getItem('todos'))
    let index = todos.findIndex(todo => todo.id == id)
    if (index > -1) {
        todos.splice(index, 1)
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
          }).then((response) => {
            if (response.status == 200) {
                set(todos)
            } else {
                alert(`Server response status: ${response.status} !`)
            }
        })
        return true
    }
    return false
}

const set = (todos) => {
    return localStorage.setItem('todos', JSON.stringify(todos))
}