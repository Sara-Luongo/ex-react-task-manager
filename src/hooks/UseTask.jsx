import { useEffect } from "react";
import { useState } from "react";
import { data } from "react-router-dom";

function useTask() {

    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_URL;

    async function getTask() {
        try {
            const response = await fetch(`${apiUrl}/tasks`);
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error(data.message)
        }

    };

    useEffect(() => {
        getTask()
    }, [])

    async function addTask({ title: title, description: description, status: status }) {
        const postTask = await fetch(`${apiUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: status
            })
        })
        const response = await postTask.json()

        if (response.success === true) {
            setTasks([...tasks, response.task])
        } else {
            throw new Error(response.message);
        }
    }

    async function removeTask(id) {
        const response = await fetch(`${apiUrl}/tasks/${id}`, {
            method: "DELETE",

        })
        const data = await response.json()
        if (data.success === false) {
            throw new Error(data.message);
        }
        const taskFiltered = tasks.filter(task => {
            return task.id !== id


        })
        setTasks(taskFiltered)
    }




    async function updateTask(updatedTask) {
        const response = await fetch(`${apiUrl}/tasks/${updatedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: updatedTask.title,
                description: updatedTask.description,
                status: updatedTask.status
            })
        })
        const data = await response.json()

        if (data.success === true) {
            const mappedTask = tasks.map(task => {
                if (task.id === updatedTask.id) {
                    return data.task
                }
                return task
            })
            setTasks(mappedTask)
        }
        if (data.success === false) {
            throw new Error(data.message);
        }
    }



    return { tasks, addTask, removeTask, updateTask }
}

export default useTask