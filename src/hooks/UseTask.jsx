import { useEffect } from "react";
import { useState } from "react";

function useTask() {

    const [tasks, setTasks] = useState([])
    const apiUrl = import.meta.env.VITE_URL;

    async function getTask() {
        try {
            const response = await fetch(`${apiUrl}/tasks`);
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error('errore nel recupero dei task', error)
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

    function removeTask() {

    }

    function updateTask() {

    }


    return { tasks, addTask, removeTask, updateTask }
};

export default useTask