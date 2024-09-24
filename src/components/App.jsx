import { useState } from "react";
import Heroes from "./Heroes";

export default function App() {


    const [names, setNames] = useState(["Шерлок Холмс","Доктор Ватсон","Профессор Мориарти","Миссис Хадсон","Ирен Адлер"])
    
    function handleDelete(id) {
        setNames(names.filter((name, index) => {
            return index !== id
        }))
    }

    return (
        <>
        <Heroes names={names} handleDelete={handleDelete} />
        </>
    )
}