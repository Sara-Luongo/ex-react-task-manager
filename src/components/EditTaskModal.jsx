import { Form } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { useRef } from "react";


function EditTaskModal({ show, onClose, task, onSave }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const submitRef = useRef();

    function submit() {
        submitRef.current.requestSubmit()
    }

    function handleSubmit(event) {
        event.preventDefault()
        const updatedTask = {
            id: task.id,
            title: title,
            description: description,
            status: status
        }
        onSave(updatedTask)
    }

    return (<>
        <Modal title={'modifica Task'}
            content={
                <form ref={submitRef} onSubmit={handleSubmit}>
                    <input placeholder="modifica titolo"
                        value={title}
                        type="text"
                        onChange={e => setTitle(e.target.value)} />
                    <textarea value={description} placeholder="modifica descrizione" onChange={e => setDescription(e.target.value)}></textarea>
                    <select onChange={e => setStatus(e.target.value)}>
                        <option value="To Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </form>
            }
            confirmText="Salva"
            onConfirm={submit}
            show={show}
        />
    </>)
}

export default EditTaskModal