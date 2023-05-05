import { useLoaderData, Form, Outlet, Link, useFetcher } from "react-router-dom";
import { getTodos } from "../../todos";

export async function loader() {
    const todos = await getTodos();
    return { todos };
};

export default function Todos() {
    const { todos } = useLoaderData();

    return (
        <div className="todos">
            <div className="container">
                <Link to={'create'}
                onClick={() => {
                    document.querySelector('.edit-todo-outlet').classList.add('edit-todo-active')
                }}
                >
                    <button type="submit" className="new-todo__button">New todo</button>
                </Link>
                <div className="todos__list">
                {todos.length ? (
                    todos.map((todo) => {
                        return (
                                <div className="todo-item" key={ todo.id }>
                                    <div className={`todo-item__text ${todo.completed ? 'completed' : ''}`}>{ todo.title } <Completed todo={todo}/></div>
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

const Completed = ({ todo }) => {
    const fetcher = useFetcher();

    let completed = todo.completed;
    if (fetcher.formData) {
        completed = fetcher.formData.get('completed') === 'true';
    };

    return (
        <fetcher.Form method="post" action={`${todo.id}/complete`}>
            <button
            className={`todo__completed-btn`}
            name="completed"
            value={completed ? "false" : "true"}
            aria-label={
            completed
                ? "Remove from completed"
                : "Add to completed"
            }
            >
                {completed ? "✓" : ""}
            </button>
        </fetcher.Form>
    );
};