import { useLoaderData, Form } from "react-router-dom"
import { getPosts, createPost } from "../../posts"

export async function loader() {
    const posts = await getPosts()
    return { posts }
}

export async function action() {
    const post = await createPost()
    return { post }
}

export default function Posts() {
    const { posts } = useLoaderData()
    // const postT = {
    //     title: 'First post',
    //     sub: "I'm a subtitle",
    //     picture: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
    //     shortText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat?',
         
    // }

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
                            <div className="post" key={post.id}>
                                <div className="post__pic">
                                    <img src={post.picture}/>
                                </div>
                                <div className="post__main">
                                    <div className="post__title"> { post.title } </div>
                                    <div className="post__sub"> { post.sub } </div>
                                    <div className="post__text"> { post.shortText } </div>
                                    <div className="buttons">
                                        <button type='button' className="open-button">Open</button>
                                        <button type="button" className="edit-button">Edit</button>
                                        <button type='button' className="delete-button">Delete</button>
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