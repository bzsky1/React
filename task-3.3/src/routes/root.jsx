import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom"

export default function Root() {
  // const { post } = useLoaderData()

    return (
      <div className="root">
        <header className="header">
          <nav className="header__nav">
            <Link to={`posts`}>Posts List</Link>
            <Link to={`todos`}>Todo List</Link>
            <Link to={`users`}>User List</Link>
          </nav>
        </header>
        <div className="main">
          <Outlet />
        </div>
      </div>
    )
  };