import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";
import TaskRow from "../components/TaskRow";
import { useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useCallback } from "react";

function TaskList() {
    const { tasks } = useContext(GlobalContext);

    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setOrder] = useState(1);
    const [searchQuery, setSearchQuery] = useState('')
    const timeOutRef = useRef();
    function handleSort(stringa) {
        setSortBy(stringa)

        if (sortBy === stringa && sortOrder === 1) {
            setOrder(-1)
        }
        else {
            setOrder(1)
        }
    };

    const debouncedSearch = useCallback((value) => {
        clearTimeout(timeOutRef.current);
        timeOutRef.current = setTimeout(() => {
            setSearchQuery(value)
        }, 1000);
    }, [])

    const sortedBy = useMemo(() => {
        const taskFiltered = tasks.filter((task) => {
            return (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.createdAt.toString().includes(searchQuery)
            )
        });


        taskFiltered.sort((a, b) => {
            if (sortBy === 'title') {
                const comparsion = a.title.localeCompare(b.title)
                return comparsion * sortOrder
            }

            if (sortBy === 'status') {
                const statusOrder = {
                    "To do": 1,
                    "Doing": 2,
                    "Done": 3
                }
                const comparsion = statusOrder[a.status] - statusOrder[b.status]
                return comparsion * sortOrder
            }
            if (sortBy === 'createdAt') {
                const comparsion = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                return comparsion * sortOrder
            }

        })
        return taskFiltered;
    }, [tasks, sortBy, sortOrder, searchQuery])




    return (<>
        <div>
            <div>
                <input onChange={(e => debouncedSearch(e.target.value))} type="text" />
                <p>{searchQuery}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>nome</th>
                        <th onClick={() => handleSort('status')}>stato</th>
                        <th onClick={() => handleSort('createdAt')}>data di creazione</th>
                        <th onClick={() => handleSort('description')}>descrizione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && sortedBy.map(tasks => {
                        return <TaskRow key={tasks.id} task={tasks} />
                    })}
                </tbody>
            </table>
        </div>
    </>)
};

export default TaskList;