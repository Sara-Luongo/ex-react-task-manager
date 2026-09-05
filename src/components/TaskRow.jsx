import React from "react"
import { Link } from "react-router-dom"

function TaskRow({ task }) {
    let rowColor = 'trasparent'

    if (task.status === 'To do') {
        rowColor = 'red'
    } else if (task.status === 'Doing') {
        rowColor = 'yellow'
    } else if (task.status === 'Done') {
        rowColor = 'green'
    }

    return (<>
        <tr>
            <td>
                <Link to={`/task/${task.id}`}>
                    {task.title}
                </Link>
            </td>
            <td style={{ backgroundColor: rowColor }}>{task.status}</td>
            <td>{task.createdAt}</td>
        </tr>
    </>)
};

export default React.memo(TaskRow)