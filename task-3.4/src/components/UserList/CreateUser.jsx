import { redirect, useNavigate, Form } from "react-router-dom";
import { createUser } from "../../users";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const user = Object.fromEntries(formData);
    await createUser(user);
    document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active');
    return redirect('/users');
};

export const CreateUser = () => {
    const navigate = useNavigate();

    return (
        <div className="edit-todo">
            <div className="container">
                <Form method='post' className='edit-user-form'>
                    <h1>Name</h1>
                    <input required type="text" name="name" placeholder='Enter name here'/>
                    <h1>Username</h1>
                    <input required type="text" name="username" placeholder='Enter username here'/>
                    <h1>Avatar URL</h1>
                    <input required type="text" name="avatar" placeholder='http://www.example.com/avatar.png' defaultValue={'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'}/>
                    <div className="form-edit-todo__buttons">
                        <button className='edit-form__save' type='submit'>Save</button>
                        <button className='edit-form__cancel' type='button'
                        onClick={() => {
                            navigate(-1);
                            document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active');
                        }}
                        >Cancel</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};