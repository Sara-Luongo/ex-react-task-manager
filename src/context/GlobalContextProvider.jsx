import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


/*creazione context*/
const GlobalContext = createContext();
const apiUrl = import.meta.env.VITE_URL;

/* creazione provider*/
function GlobalContextProvider({ children }) {

    const [memoTaskList, setMemoTaskList] = useState([])

    async function getList() {
        const response = await fetch(`${apiUrl}/tasks`);
        const data = await response.json()
        setMemoTaskList(data)
    };

    useEffect(() => {
        getList()
    }, [])
    console.log(memoTaskList);

    return <GlobalContext.Provider value={memoTaskList}>
        {children}
    </GlobalContext.Provider>
};

export default GlobalContextProvider