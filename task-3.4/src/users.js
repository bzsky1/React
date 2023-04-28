import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    users.map((user) => {
        user.avatar = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
    })
    set(users)
    return users
}

export async function getUsers(query) {
    let users = await fetchData()
    if (!users) users = []
    if (query) {
        users = matchSorter(users, query)
    }
    return users.sort(sortBy('createdAt'))
}

export async function createUser() {
    let id = Math.random().toString(36).substring(3,9)
    let name = 'Test User'
    let info = 'test_test_test'
    let avatar = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'
    let user = { id, createdAt: Date.now(), name, info, avatar }
    let users = await getUsers()
    users.unshift(user)
    set(users)
    return user
}

const set = (users) => {
    return localStorage.setItem('users', JSON.stringify(users))
}