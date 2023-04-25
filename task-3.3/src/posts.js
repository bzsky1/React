import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getPosts(query) {
    let posts = await localforage.getItem('posts')
    if (!posts) posts = []
    if (query) {
        posts = matchSorter(posts, query)
    }
    return posts.sort(sortBy('createdAt'))
}

export async function createPost() {
    let id = Math.random().toString(36).substring(3,9)
    let post = { id, createdAt: Date.now() }
    let posts = await getPosts()
    posts.unshift(post)
    await set(posts)
    return post
}

export async function getPost(id) {
    let posts = await localforage.getItem('posts')
    let post = posts.find(post => post.id === id)
    return post ?? null
}

export async function updatePost(id, updates) {
    let posts = await localforage.getItem('posts')
    let post = posts.find(post => post.id === id)
    if (!post) throw new Error('No post found for', id)
    Object.assign(post, updates)
    await set(posts)
    return post
}

export async function deletePost(id) {
    let posts = await localforage.getItem('posts')
    let index = posts.findIndex(post => post.id === id)
    if (index > -1) {
        posts.splice(index, 1)
        await set(posts)
        return true
    }
    return false
}

const set = (posts) => {
    return localforage.setItem('posts', posts)
}