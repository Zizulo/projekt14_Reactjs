import { useState, useEffect } from "react";

export const Example = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            console.log(e.key);
        });
        return () => {
            window.removeEventListener("keydown", (e) => {
                console.log(e.key);
            });
        }
    }, []);

    return <button onClick={() => setCounter(counter+1)}>{counter}</button>
};