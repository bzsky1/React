import { useLoaderData } from "react-router-dom";
import { getUserTodos } from "../../users"


export const loader = async ({ params }) => {
    const todos = await getUserTodos(params.userId);
    return { todos };
};

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

export const UserTodos = () => {
    const { todos } = useLoaderData();

    return (
        <div className="albums">
            {todos.map((todo) => {
                return (
                    <div className="album" key={todo.id}>
                        <div className={`album__title ${todo.completed ? 'completed-user-todo' : ''}`}> { bigFirstLetter(todo.title) } </div>
                    </div>
                );
            })}
        </div>
    )
};