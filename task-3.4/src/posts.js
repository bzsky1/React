import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    const shortPosts = posts.splice(0, 7)
    shortPosts.map((post) => {
        post.title = bigFirstLetter(post.title)
        post.title = post.title.slice(0, 20)
        post.picture = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
        post.sub = 'test_test_test'
    })
    return shortPosts
}

export async function getPosts(query) {
    let posts = await fetchData()
    if (!posts) posts = []
    if (query) {
        posts = matchSorter(posts, query)
    }
    await set(posts)
    return posts.sort(sortBy('createdAt'))
}

export async function createPost() {
    let id = Math.random().toString(36).substring(3,9)
    let title = 'Random post'
    let sub = 'Subtitle'
    let body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat?'
    let picture = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
    let post = { id, createdAt: Date.now(), title, sub, body, picture }
    let posts = await localforage.getItem('posts')
    posts.unshift(post)
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(posts),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    await set(posts)
    console.log('test')
    return post
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

const set = (posts) => {
    return localforage.setItem('posts', posts)
}