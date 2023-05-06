import { redirect } from "react-router-dom";
import { deletePost } from "../../posts";


export async function action({ params }) {
    await deletePost(params.postId)
    return redirect('/posts')
}