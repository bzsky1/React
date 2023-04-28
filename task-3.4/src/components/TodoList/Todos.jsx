import { useLoaderData, Form, Outlet, Link } from "react-router-dom";
import { createTodo, getTodos } from "../../todos";

export async function loader() {
    const todos = await getTodos();
    return { todos };
};

export async function action() {
    const todo = await createTodo();
    return { todo };
};

export default function Todos() {
    const { todos } = useLoaderData();

    return (
        <div className="todos">
            <div className="container">
                <Form method="post">
                    <button type="submit" className="new-todo__button">New todo</button>
                </Form>
                <div className="todos__list">
                {todos.length ? (
                    todos.map((todo) => {
                        return (
                                <div className="todo-item" key={ todo.id }>
                                    <div className="todo-item__text">{ todo.title }</div>
                                    <div className="todo-item__buttons">
                                        <Link to={`${todo.id}/edit`}>
                                            <button className="todo-item__edit-btn"
                                            onClick={() => {
                                                document.querySelector('.edit-todo-outlet').classList.add('edit-todo-active')
                                            }}
                                            >Edit</button>
                                        </Link>
                                        <Form method="post" action={`${todo.id}/delete`}><button className="todo-item__delete-btn">Delee</button></Form>
                                    </div>
                                </div>
                        )
                    })
                ) : (
                    <p className="noposts">
                        <i>No Todos</i> &#x1F62D; <i>Please add your first Todo!</i>
                    </p>
                )}
                </div>
            </div>
            <div className="edit-todo-outlet">
                <Outlet />
            </div>
        </div>
    )
};