import { useLoaderData, Form } from "react-router-dom";
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
                                        <button className="todo-item__edit-btn">Edit</button>
                                        <button className="todo-item__delete-btn">Delee</button>
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
        </div>
    )
};