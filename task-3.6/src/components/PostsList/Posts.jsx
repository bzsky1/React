import { useLoaderData, Form, Link, redirect } from "react-router-dom"
import { getPosts } from "../../posts"

export async function loader() {
    const posts = await getPosts()
    return { posts }
}

export async function action() {
    return redirect(`create`)
}

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

export default function Posts() {
    const { posts } = useLoaderData()

    return (
        <div className="posts">
            <div className="container">
                <Form method="post">
                    <button type="submit" className="new-post__button">New post</button>
                </Form>
                <div className="posts_list">
                    {posts.length ? (
                        posts.map((post) => {
                            return (
                            <div className="post" key={ post.id }>
                                <div className="post__pic">
                                    <img src={ post.picture }/>
                                </div>
                                <div className="post__main">
                                    <div className="post__title"> { bigFirstLetter(post.title) } </div>
                                    <div className="post__sub"> { post.sub } </div>
                                    <div className="post__text"> { bigFirstLetter(post.body) } </div>
                                    <div className="buttons">
                                        <Link to={`${post.id}`}><button type='button' className="open-button">Open</button></Link>
                                        <Link to={`${post.id}/edit`}><button type="button" className="edit-button">Edit</button></Link>
                                        <Form method="post" action={`${post.id}/delete`}><button type='submit' className="delete-button">Delete</button></Form>
                                    </div>
                                </div>
                            </div>)
                        })
                    ) : (
                        <p className="noposts">
                            <i>No Posts</i> &#x1F62D; <i>Please add your first post!</i>
                        </p>
                    )}
                    
                </div>
            </div>
        </div>
    )
}