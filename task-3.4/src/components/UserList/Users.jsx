import { useLoaderData, Form, Link, Outlet, redirect } from "react-router-dom";
import { createUser, getUsers } from "../../users";

export async function loader() {
    const users = await getUsers();
    return { users };
};

export async function action() {
    document.querySelector('.edit-user-outlet').classList.add('edit-todo-active');
    return redirect('create');
};

export default function Users() {
    const { users } = useLoaderData();

    return (
        <div className="users">
            <div className="container">
                <Form method="post">
                    <button type="submit" className="new-user__button">New user</button>
                </Form>
                <div className="users__list">
                    {users.length ? (
                        users.map((user) => {
                            return (
                                <div className="user" key={ user.id }>
                                    <div className="user__avatar">
                                        <img src={ user.avatar }/>
                                    </div>
                                    <div className="user__main">
                                        <div className="user__name">
                                            { user.name }
                                        </div>
                                        <div className="user__info"> { user.username } </div>
                                    </div>
                                    <div className="user__buttons">
                                        <Link to={`${user.id}/edit`}><button className="user-item__edit-btn"
                                        onClick={() => {
                                            document.querySelector('.edit-user-outlet').classList.add('edit-todo-active');
                                        }}
                                        >Edit</button></Link>
                                        <Form method="post" action={`${user.id}/delete`}><button className="user-item__delete-btn">Delete</button></Form>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p className="noposts">
                            <i>No Users</i> &#x1F62D; <i>Please add your first User!</i>
                        </p>
                    )}
                </div>
            </div>
            <div className="edit-user-outlet">
                <Outlet />
            </div>
        </div>
    );
};

