import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import './index.css'
import ErrorPage from "./error-page"
import Root from './components/Root'
import Posts, { loader as postsLoader, action as postsAction } from './components/PostsList/Posts'
import Index from './components'
import Todos, { loader as todosLoader, action as todosAction} from './components/TodoList/Todos'
import Users, { loader as usersLoader, action as usersAction } from './components/UserList/Users'
import Post, { loader as postLoader } from './components/PostsList/Post'
import { action as deleteAction } from './components/PostsList/Delete'
import EditPost, { action as editAction } from './components/PostsList/Edit'
import { action as deleteTodoAction } from './components/TodoList/DeleteTodo'
import EditTodo, { loader as todoLoader, action as todoEditAction } from './components/TodoList/EditTodo'
import CreatePost, { action as createPostAction } from './components/PostsList/Create'
import CreateTodo, { action as crateTodoAction } from './components/TodoList/CreateTodo'
import { action as deleteUserAction } from './components/UserList/DeleteUser'
import { CreateUser, action as createUserAction } from './components/UserList/CreateUser'
import { EditUser, loader as userLoader, action as userAction } from './components/UserList/EditUser'
import { action as completeTodoAction } from './components/TodoList/CompleteTodo'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
        loader: postsLoader,
        action: postsAction,
      },
      {
        path: 'posts/:postId',
        element: <Post />,
        loader: postLoader,
      },
      {
        path: 'posts/:postId/delete',
        action: deleteAction,
      },
      {
        path: 'posts/:postId/edit',
        element: <EditPost />,
        loader: postLoader,
        action: editAction,
      },
      {
        path: 'posts/create',
        element: <CreatePost />,
        action: createPostAction,
      },
      {
        path: 'todos',
        element: <Todos />,
        loader: todosLoader,
        // action: todosAction,
        children: [
          {
            path: ':todoId/edit',
            element: <EditTodo />,
            loader: todoLoader,
            action: todoEditAction,
          },
          {
            path: 'create',
            element: <CreateTodo />,
            action: crateTodoAction,
          },
          {
            path: ':todoId/complete',
            action: completeTodoAction,
          },
        ]
      },
      {
        path:'todos/:todoId/delete',
        action: deleteTodoAction,
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
        action: usersAction,
        children: [
          {
            path: 'create',
            element: <CreateUser />,
            action: createUserAction,
          },
          {
            path: ':userId/edit',
            element: <EditUser />,
            loader: userLoader,
            action: userAction,
          },
        ]
      },
      {
        path: 'users/:userId/delete',
        action: deleteUserAction,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);