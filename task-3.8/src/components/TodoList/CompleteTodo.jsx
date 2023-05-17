import { redirect } from "react-router-dom";
import { updateTodo } from "../../todos";


export const action = async ({ params, request }) => {
    let formData = await request.formData();
    await updateTodo(params.todoId, {
        completed: formData.get('completed') === 'true'
    });
    return redirect('/todos');
};