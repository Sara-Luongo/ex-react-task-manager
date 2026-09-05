import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useTask from "../hooks/useTask";


/*creazione context*/
export const GlobalContext = createContext();
const apiUrl = import.meta.env.VITE_URL;

/* creazione provider*/
export function GlobalContextProvider({ children }) {
    const { tasks, addTask, removeTask, updateTask } = useTask();

    return <GlobalContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
        {children}
    </GlobalContext.Provider>
};

