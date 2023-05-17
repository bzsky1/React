import { useLoaderData } from "react-router-dom";
import { getUserPosts } from "../../users";


export const loader = async ({ params }) => {
    const posts = await getUserPosts(params.userId);
    return { posts };
};

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

export const UserPosts = () => {
    const { posts } = useLoaderData();

    return (
        <div className="albums">
            {posts.map((post) => {
                return (
                    <div className="user-post">
                        <div className="user-post__title"> { bigFirstLetter(post.title) } </div>
                        <div className="user-post__body"> { bigFirstLetter(post.body) } </div>
                    </div>
                );
            })}
        </div>
    );
};