import { useLoaderData, Form } from "react-router-dom";
import { createUser, getUsers } from "../../users";

export async function loader() {
    const users = await getUsers();
    return { users };
};

export async function action() {
    const user = await createUser();
    return { user };
};

export default function Users() {
    const { users } = useLoaderData();

    return (
        <div className="users">
            <div className="container">
                <Form method="post">
                    <button type="submit" className="new-user__button">New user</button>
                </Form>
                {users.length ? (
                    users.map((user) => {
                        return (
                            <div className="users__list">
                                <div className="user" key={ user.id }>
                                    <div className="user__avatar">
                                        <img src={ user.avatar }/>
                                    </div>
                                    <div className="user__main">
                                        <div className="user__name">
                                            { user.name }
                                        </div>
                                        <div className="user__info"> { user.info } </div>
                                    </div>
                                    <div className="user__buttons">
                                        <button className="user-item__edit-btn">Edit</button>
                                        <button className="user-item__delete-btn">Delee</button>
                                    </div>
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
    );
};

