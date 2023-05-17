import { NavLink, Outlet, Link } from "react-router-dom";

export const User = () => {

    return (
        <div className="user-page">
            <div className="container">
                <div className="user-page__main-block">
                    <header className="user-page__header">
                        <nav className="user-page__nav">
                            <Link to={``} className={`user-page__nav-active info-user-page-tab`} onClick={() => {
                                document.querySelector('.info-user-page-tab').classList.add('user-page__nav-active')
                            }}>Info</Link>
                            <NavLink to={`albums`} className={({ isActive }) =>
                                isActive ? 'user-page__nav-active' : ''
                            } onClick={() => {
                                document.querySelector('.info-user-page-tab').classList.remove('user-page__nav-active')
                            }}>Albums</NavLink>
                            <NavLink to={'todos'} className={({ isActive }) =>
                                isActive ? 'user-page__nav-active' : ''
                            } onClick={() => {
                                document.querySelector('.info-user-page-tab').classList.remove('user-page__nav-active')
                            }}>Todos</NavLink>
                            <NavLink to={'posts'} className={({ isActive }) =>
                                isActive ? 'user-page__nav-active' : ''
                            } onClick={() => {
                                document.querySelector('.info-user-page-tab').classList.remove('user-page__nav-active')
                            }}>Posts</NavLink>
                        </nav>
                    </header>
                    <div className="user-page__outlet">
                        <Outlet />
                    </div>
                    <div className="user-page__close">
                        <svg 
                        onClick={() => {
                            document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active');
                        }}
                        width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Circle"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};