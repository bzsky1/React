import { Form, useLoaderData } from "react-router-dom";
import { getPost } from "../../posts";

export async function loader({ params }) {
    const post = await getPost(params.postId)
    return { post }
}

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

export default function Post() {
    const { post } = useLoaderData()
    const { picture, title, sub, body } = post

    return (
        <div className="P">
            <div className="container">
                <div className="p__main">
                    <div className="p__img">
                        <img src={ picture }/>
                    </div>
                    <div className="p__title"> { bigFirstLetter(title) } </div>
                    <div className="p__sub"> { sub } </div>
                    <div className="p__text"> { bigFirstLetter(body) } </div>
                </div>
            </div>
        </div>
    )
}