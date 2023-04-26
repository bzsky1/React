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

// export async function getPost(id) {
//     let posts = await localforage.getItem('posts')
//     let post = posts.find(post => post.id === id)
//     return post ?? null
// }

// export async function updatePost(id, updates) {
//     let posts = await localforage.getItem('posts')
//     let post = posts.find(post => post.id === id)
//     if (!post) throw new Error('No post found for', id)
//     Object.assign(post, updates)
//     await set(posts)
//     return post
// }

// export async function deletePost(id) {
//     let posts = await localforage.getItem('posts')
//     let index = posts.findIndex(post => post.id === id)
//     if (index > -1) {
//         posts.splice(index, 1)
//         await set(posts)
//         return true
//     }
//     return false
// }

const set = (todos) => {
    return localforage.setItem('todos', todos)
}