import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom";
import { getTodo, updateTodo } from "../../todos";

export const loader = async ({ params }) => {
    const todo = await getTodo(params.todoId);
    return { todo };
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateTodo(params.todoId, updates);
    return redirect('/todos');
};


export default function EditTodo() {
    const { todo } = useLoaderData()
    const navigate = useNavigate()

    return (
        <div className="edit-todo">
            <div className="container">
                <Form method='post' className='edit-todo-form'>
                    <h1>What to do?</h1>
                    <input required defaultValue={ todo.title } type="text" name="title" placeholder='Enter what you want to do'/>
                    <div className="form-edit-todo__buttons">
                        <button className='edit-form__save' type='submit'>Save</button>
                        <button className='edit-form__cancel' type='button'
                        onClick={() => {
                            navigate(-1)
                            document.querySelector('.edit-todo-outlet').classList.remove('edit-todo-active')
                        }}
                        >Cancel</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

