import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


/*creazione context*/
export const GlobalContext = createContext();
const apiUrl = import.meta.env.VITE_URL;

/* creazione provider*/
export function GlobalContextProvider({ children }) {

    const [memoTaskList, setMemoTaskList] = useState([])

    async function getList() {
        try {
            const response = await fetch(`${apiUrl}/tasks`);
            const data = await response.json()
            setMemoTaskList(data)
        } catch (error) {
            console.error("Errore nel recupero dei task:", error);
        }

    };

    useEffect(() => {
        getList()
    }, [])
    console.log(memoTaskList);

    return <GlobalContext.Provider value={{ memoTaskList }}>
        {children}
    </GlobalContext.Provider>
};

