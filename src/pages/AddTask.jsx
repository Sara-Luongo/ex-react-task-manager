import { useState } from "react"
import { useRef } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";


function AddTask() {

    const [title, setTitle] = useState('');
    const description = useRef();
    const statusRef = useRef();
    const [messaggio, setMessaggio] = useState('')
    const { addTask } = useContext(GlobalContext);


    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (title.trim() === '') {
            setMessaggio('il titolo non puòessere vuoto')
            return
        }
        if ([...title].some(char => symbols.includes(char))) {
            setMessaggio('il nome non può contenere caratteri speciali')
            return
        }
        try {
            await addTask({ title: title, description: description.current.value, status: statusRef.current.value })
            alert('Task creata con successo')
            setTitle('')
            description.current.value = ''
            statusRef.current.value = ''
        } catch (error) {
            alert(error.message)
        }

        console.log(`
            task inserita con successo :
            -titolo: ${title},
            -descrizione: ${description.current.value}
            -stato task ${statusRef.current.value}
            `)
    };
    return (<>
        <section>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={title}
                        onChange={(e => { setTitle(e.target.value) })}
                        placeholder="title" />
                    <p>{messaggio}</p>
                    <textarea ref={description} placeholder="description"></textarea>
                    <select ref={statusRef}>
                        <option value="/">scegli stato task</option>
                        <option value="Do">Do</option>
                        <option value="Doing">Doing</option>
                        <option value="To Do">To Do</option>
                    </select>
                    <button type="submit">invia</button>
                </form>
            </div>
        </section>
    </>)
};
export default AddTask