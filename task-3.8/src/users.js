import { matchSorter } from "match-sorter";

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    users.map((user) => {
        user.avatar = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png';
        user.createdAt = Date.now();
    });
    set(users);
    return users;
};

export const getAlbums = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
    const albums = await res.json();
    return albums;
};

export const getUserTodos = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    const todos = await res.json();
    return todos;
};

export const getUserPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const posts = await res.json();
    return posts;
};

export const getUsers = async (query) => {
    let users = await JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        users = await fetchData();
        if (!users) users = [];
        if (query) {
            users = matchSorter(users, query)
        };
    };
    return users.sort((a, b) => {
        return b.createdAt - a.createdAt;
    });
};

export const createUser = async (newUser) => {
    let id = Math.random().toString(36).substring(3,9);
    let name = newUser.name;
    let username = newUser.username;
    let avatar = newUser.avatar;
    let user = { id, createdAt: Date.now(), name, username, avatar };
    let users = await JSON.parse(localStorage.getItem('users'));
    users.unshift(user);
    await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        if (response.status == 201) {
            set(users)
        } else {
            alert(`Server response status: ${response.status} !`)
        };
    })
    return user;
};

export const getUser = async (id) => {
    let users = await JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.id == id);
    return user ?? null;
}

export const updateUser = async (id, updates) => {
    let users = await JSON.parse(localStorage.getItem('users'));
    let user = users.find((user) => {
        return user.id == id;
    });
    Object.assign(user, updates);
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            user
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => {
        if (response.status == 200) {
            set(users)
        } else {
            alert(`Server response status: ${response.status} !`)
        }
    })
    document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active')
    set(users)
    return user

};

export const deleteUser = async (id) => {
    let users = await JSON.parse(localStorage.getItem('users'));
    let index = users.findIndex(user => user.id == id);
    if (index > -1) {
        users.splice(index, 1);
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
          }).then((response) => {
            if (response.status == 200) {
                set(users);
            } else {
                alert(`Server response status: ${response.status} !`);
            };
        });
        return true;
    };
    return false;
};

const set = (users) => {
    return localStorage.setItem('users', JSON.stringify(users));
}