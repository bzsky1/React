import { redirect } from "react-router-dom";
import { deleteUser } from "../../users";

export const action = async ({ params }) => {
    await deleteUser(params.userId);
    return redirect('/users');
};
