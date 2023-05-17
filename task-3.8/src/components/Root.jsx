import { Outlet, NavLink } from "react-router-dom"

export default function Root() {
  // const { post } = useLoaderData()

    return (
      <div className="root">
        <header className="header">
          <nav className="header__nav">
            <NavLink to={`posts`}
            className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
            >Posts List</NavLink>
            <NavLink to={`todos`} className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
            >Todo List</NavLink>
            <NavLink to={`users`} className={({ isActive }) => 
              isActive ? 'active-link' : ''
            }
            >User List</NavLink>
          </nav>
        </header>
        <div className="main">
          <Outlet />
        </div>
      </div>
    )
  };