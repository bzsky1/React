import { Form, redirect, useNavigate } from 'react-router-dom'
import { createPost } from '../../posts'

export async function action({ request }) {
    const formData = await request.formData()
    const post = Object.fromEntries(formData)
    await createPost(post)
    return redirect('/posts')
}

export default function CreatePost() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Form method='post' className='edit-form'>
                <h1>Post title</h1>
                <input required type="text" name="title" placeholder='Enter title of your post' />
                <h1>Post picture URL</h1>
                <input required type="text" name="picture"  placeholder='https://example.com/picture.jpg' />
                <h1>Post subtitle</h1>
                <input required type="text" name="sub" placeholder='Enter subtitle of your post'/>
                <h1>Short description for your post</h1>
                <textarea required minLength={20} name="body" placeholder='Better not more than 150 words' />
                <div className="form-edit__buttons">
                    <button className='edit-form__save' type='submit'>Save</button>
                    <button className='edit-form__cancel' type='button'
                    onClick={() => {
                        navigate(-1)
                    }}
                    >Cancel</button>
                </div>
            </Form>
        </div>
    )
}