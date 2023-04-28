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
        delete post.userId
        post.createdAt = Date.now()
        post.title = bigFirstLetter(post.title)
        post.title = post.title.slice(0, 20)
        post.picture = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
        post.sub = 'test_test_test'
    })
    return shortPosts
}

export async function getPosts(query) {
    let posts = await JSON.parse(localStorage.getItem('posts'))
    if (posts === null) {
        let posts = await fetchData()
        if (!posts) posts = []
        if (query) {
            posts = matchSorter(posts, query)
        }
        set(posts)
    }
    return posts.sort((a, b) => {
        return b.createdAt - a.createdAt
    })
}

export async function createPost() {
    let id = Math.random().toString(36).substring(3,9)
    let title = ''
    let sub = ''
    let body = ''
    let picture = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
    let post = { id, createdAt: Date.now(), title, sub, body, picture }
    let posts = JSON.parse(localStorage.getItem('posts'))
    posts.unshift(post)
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        if (response.status == 201) {
            set(posts)
        } else {
            alert(`Server response status: ${response.status} !`)
        }
    })
    return post
}

export async function getPost(id) {
    let posts = await JSON.parse(localStorage.getItem('posts'))
    let post = posts.find((post) => {
        return post.id == id
    })
    return post ?? null
}

export async function updatePost(id, updates) {
    let posts = await JSON.parse(localStorage.getItem('posts'))
    let post = posts.find(post => post.id == id)
    if (!post) throw new Error('No post found for', id)
    Object.assign(post, updates)
    console.log(post, updates)
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => {
        if (response.status == 200) {
            set(posts)
        } else {
            alert(`Server response status: ${response.status} !`)
        }
    })
    set(posts)
    return post
}

export async function deletePost(id) {
    let posts = await JSON.parse(localStorage.getItem('posts'))
    let index = posts.findIndex(post => post.id == id)
    if (index > -1) {
        posts.splice(index, 1)
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          }).then((response) => {
            if (response.status == 200) {
                set(posts)
            } else {
                alert(`Server response status: ${response.status} !`)
            }
        })
        return true
    }
    return false
}

const set = (posts) => {
    return localStorage.setItem('posts', JSON.stringify(posts))
}