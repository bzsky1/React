import { useNavigate } from 'react-router-dom';
import { createPost } from '../../posts';
import { useForm } from 'react-hook-form';

export default function CreatePost() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{ errors } } = useForm();

    return (
        <div className='container'>
            <form className='edit-form' onSubmit={handleSubmit((data) => {
                createPost(data);
                setTimeout(() => {
                    navigate(-1);
                }, 1000);
            })}>
                <h1>Post title</h1>
                <input type="text" {...register("title", { required: 'This is required!', maxLength: {
                    value: 40,
                    message: 'Max length is 40 characters!'
                } })} placeholder='Enter title of your post' />
                <p className='create-post-required-text'>{errors.title?.message}</p>
                <h1>Post picture URL</h1>
                <input type="text" {...register("picture", { required: 'This is required!' })}  placeholder='https://example.com/picture.jpg' />
                <p className='create-post-required-text'>{errors.picture?.message}</p>
                <h1>Post subtitle</h1>
                <input type="text" {...register("sub", { required: 'This is required!' })} placeholder='Enter subtitle of your post'/>
                <p className='create-post-required-text'>{errors.sub?.message}</p>
                <h1 className='textarea-h1'>Short description for your post</h1>
                <textarea {...register("body", { required: 'This is required!', minLength: {
                    value: 20,
                    message: 'Min length is 20!'
                } })} placeholder='Better not more than 150 words'/>
                <p className='create-post-required-text'>{errors.body?.message}</p>
                <div className="form-edit__buttons">
                    <button className='edit-form__save' type='submit'>Save</button>
                    <button className='edit-form__cancel' type='button'
                    onClick={() => {
                        navigate(-1)
                    }}
                    >Cancel</button>
                </div>
            </form>
        </div>
    );
};