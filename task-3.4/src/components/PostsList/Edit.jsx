import { Form, useLoaderData, redirect } from 'react-router-dom'
import { updatePost } from '../../posts'

export async function action({ request, params }) {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    await updatePost(params.postId, updates)
    return redirect('/posts')
}

export default function EditPost() {
    const { post } = useLoaderData()

    return (
        <div className='container'>
            <Form method='post' className='edit-form'>
                <h1>Post title</h1>
                <input required type="text" name="title" placeholder='Enter title of your post' defaultValue={post.title}/>
                <h1>Post picture URL</h1>
                <input required type="text" name="picture" defaultValue={post.picture} placeholder='https://example.com/picture.jpg' />
                <h1>Post subtitle</h1>
                <input required type="text" name="sub" placeholder='Enter subtitle of your post' defaultValue={post.sub} />
                <h1>Short description for your post</h1>
                <textarea required minLength={20} name="body" defaultValue={post.body} rows={6} placeholder='Better not more than 150 words' />
                <div className="form-edit__buttons">
                    <button className='edit-form__save' type='submit'>Save</button>
                    <button className='edit-form__cancel' type='button'>Cancel</button>
                </div>
            </Form>
        </div>
    )
}