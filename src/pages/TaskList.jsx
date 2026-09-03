import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";
import TaskRow from "../components/TaskRow";

function TaskList() {

    const { memoTaskList } = useContext(GlobalContext);

    console.log("Dati ricevuti in TaskList:", memoTaskList);

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
                    {memoTaskList && memoTaskList.map(tasks => {
                        return <TaskRow key={tasks.id} task={tasks} />
                    })}
                </tbody>
            </table>
        </div>
    </>)
};

export default TaskList;