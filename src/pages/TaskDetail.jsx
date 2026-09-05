import { useParams } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

function TaskDetail() {
    const { id } = useParams()
    const { tasks } = useContext(GlobalContext);
    const taskId = Number(id)

    const singleTask = tasks.find(task => {
        return task.id === taskId
    })

    const deleteTask = () => {
        console.log('Elimino task')
    }

    return (<>
        <div>
            <ul>
                <li>
                    {singleTask.title}
                </li>
                <li>
                    {singleTask.description}
                </li>
                <li>
                    {singleTask.status}
                </li>
                <li>
                    {singleTask.createdAt}
                </li>
            </ul>
            <button onClick={deleteTask}>Elimina Task</button>
        </div>

    </>)
}

export default TaskDetail;