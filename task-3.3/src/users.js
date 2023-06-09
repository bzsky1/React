import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getUsers(query) {
    let users = await localforage.getItem('users')
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
    await set(users)
    return user
}

const set = (users) => {
    return localforage.setItem('users', users)
}