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
import EditPost, { action as editAction} from './components/PostsList/Edit'
import { action as deleteTodoAction} from './components/TodoList/DeleteTodo'
import EditTodo from './components/TodoList/EditTodo'

 
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
        path: 'todos',
        element: <Todos />,
        loader: todosLoader,
        action: todosAction,
        children: [
          {
            path: ':todoId/edit',
            element: <EditTodo />
          }
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
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);