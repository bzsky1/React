import { useLoaderData, Form, useNavigate } from "react-router-dom";


export default function EditTodo() {
    // const { todo } = useLoaderData()
    const navigate = useNavigate()

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
    )
}