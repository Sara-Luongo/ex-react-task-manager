import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";
import TaskRow from "../components/TaskRow";

function TaskList() {

    const { tasks } = useContext(GlobalContext);

    console.log("Dati ricevuti in TaskList:", tasks);

    return (<>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>nome</th>
                        <th>stato</th>
                        <th>data di creazione</th>
                        <th>descrizione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map(tasks => {
                        return <TaskRow key={tasks.id} task={tasks} />
                    })}
                </tbody>
            </table>
        </div>
    </>)
};

export default TaskList;