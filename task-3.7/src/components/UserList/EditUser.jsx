import { redirect, useNavigate, Form, useLoaderData } from "react-router-dom";
import { getUser, updateUser } from "../../users";

export const loader = async ({ params }) => {
    const user = await getUser(params.userId);
    return { user };
}

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateUser(params.userId, updates);
    document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active');
    return redirect('/users');
};

export const EditUser = () => {
    const navigate = useNavigate();
    const { user } = useLoaderData();

    return (
        <div className="edit-todo">
            <div className="container">
                <Form method='post' className='edit-user-form'>
                    <h1>Name</h1>
                    <input required type="text" name="name" placeholder='Enter name here' defaultValue={ user.name }/>
                    <h1>Username</h1>
                    <input required type="text" name="username" placeholder='Enter username here' defaultValue={ user.username }/>
                    <h1>Avatar URL</h1>
                    <input required type="text" name="avatar" placeholder='http://www.example.com/avatar.png' defaultValue={ user.avatar }/>
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