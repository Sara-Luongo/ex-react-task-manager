import { useParams } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import AddTask from "./AddTask";
import EditTaskModal from "../components/EditTaskModal";

function TaskDetail() {
    const { id } = useParams()
    const { tasks, removeTask, updateTask } = useContext(GlobalContext);
    const taskId = Number(id)
    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false);
    async function onConfirm() {
        try {
            await removeTask(taskId)
            alert('task eliminata con successo')
            navigate('/')
        } catch (error) {
            alert(error.message)
        }

    };

    function onClose() {
        setShow(false)
    };

    const singleTask = tasks.find(task => {
        return task.id === taskId
    })

    const deleteTask = () => {
        setShow(true)

    }

    async function handleSave(updatedTask) {
        try {
            await updateTask(updatedTask)
            alert('Task modificata con successo')
            setShowEdit(false)
        } catch (error) {
            alert(error.message)
        }
    }


    return (<>
        <div>
            <ul>
                <li>
                    {singleTask ? singleTask.title : 'caricamento'}
                </li>
                <li>
                    {singleTask ? singleTask.description : 'caricamento'}
                </li>
                <li>
                    {singleTask ? singleTask.status : 'caricamento'}
                </li>
                <li>
                    {singleTask ? singleTask.createdAt : 'caricamento'}
                </li>
            </ul>
            <button onClick={deleteTask}>Elimina Task</button>
            <button onClick={() => setShowEdit(true)}>
                Modifica Task
            </button>
        </div>

        <Modal title={'MODALE PER ELIMINARE DEFINITIVAMENTE LA TASK'}
            content={'cliccando su conferma la task verrà eliminata definitivamente, sei sicuro di voler procedere?'}
            show={show}
            onClose={onClose}
            onConfirm={onConfirm}
        />
        <EditTaskModal
            show={showEdit}
            onClose={() => setShowEdit(false)}
            task={singleTask}
            onSave={handleSave} />
    </>)
}

export default TaskDetail;