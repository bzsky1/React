import { Form, useLoaderData } from 'react-router-dom'

export default function EditPost() {
    const { post } = useLoaderData()

    return (
        <div className='container'>
            <Form method='post' className='edit-form'>
                <h1>Post title</h1>
                <input type="text" name="title" placeholder='Enter title of your post' defaultValue={post.title}/>
                <h1>Post picture URL</h1>
                <input type="text" name="picture" defaultValue={post.picture} placeholder='https://example.com/picture.jpg' />
                <h1>Post subtitle</h1>
                <input type="text" name="subtitle" placeholder='Enter subtitle of your post' defaultValue={post.subtitle} />
                <h1>Short description for your post</h1>
                <textarea  name="short-text" defaultValue={post.shortText} rows={6} placeholder='Better not more than 150 words' />
                <div className="edit__buttons">
                    <button type='submit'>Save</button>
                    <button type='button'>Cancel</button>
                </div>
            </Form>
        </div>
    )
}