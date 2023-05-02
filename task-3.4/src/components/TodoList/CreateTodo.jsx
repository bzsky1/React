import { Form, useNavigate, redirect } from "react-router-dom";
import { createTodo } from "../../todos";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const todo = Object.fromEntries(formData);
    await createTodo(todo);
    document.querySelector('.edit-todo-outlet').classList.remove('edit-todo-active')
    return redirect('/todos');
};


export default function CreateTodo() {
    const navigate = useNavigate();

    return (
        <div className="edit-todo">
            <div className="container">
                <Form method='post' className='edit-todo-form'>
                    <h1>What to do?</h1>
                    <input required type="text" name="title" placeholder='Enter what you want to do'/>
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
    );
};