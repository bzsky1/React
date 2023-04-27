import { Form, useLoaderData } from "react-router-dom";
import { getPost } from "../../posts";

export async function loader({ params }) {
    const post = await getPost(params.postId)
    return { post }
}

export default function Post() {
    // const { post } = useLoaderData()
    const postT = {
        title: 'First post',
        sub: "I'm a subtitle",
        titlePicture: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa qui quis atque, ducimus saepe error laborum! Qui corporis debitis enim inventore. Tenetur voluptas similique repudiandae, omnis aut temporibus quasi in laboriosam dolore labore eos? Ad, explicabo saepe totam nihil cum magni obcaecati, praesentium quaerat minus, magnam adipisci labore? Vero, placeat!',
    }

    return (
        <div className="P">
            <div className="container">
                <div className="p__main">
                    <div className="p__img">
                        <img src={postT.titlePicture}/>
                    </div>
                    <div className="p__title"> { postT.title } </div>
                    <div className="p__sub"> { postT.sub } </div>
                    <div className="p__text"> { postT.text } </div>
                </div>
            </div>
        </div>
    )
}