import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import './index.css'
import ErrorPage from "./error-page"
import Root from './routes/root'
import Posts, { loader as postsLoader, action as postsAction } from './routes/PostsList/posts'
import Index from './routes'
import Todos, { loader as todosLoader, action as todosAction} from './routes/TodoList/Todos'

 
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
        path: 'todos',
        element: <Todos />,
        loader: todosLoader,
        action: todosAction,
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);