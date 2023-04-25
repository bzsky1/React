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
import Post from './routes/PostsList/post'
import EditPost from './routes/PostsList/edit'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
        loader: postsLoader,
        action: postsAction,
      },
      {
        path: 'posts/post/:postId/edit',
        element: <EditPost />,
        loader: postsLoader

      },
      {
        path: 'posts/post/:postId',
        element: <Post />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);