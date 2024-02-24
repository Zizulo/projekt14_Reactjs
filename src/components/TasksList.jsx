import { useRef, useState } from "react";
import {tasks as tasksData} from "../data/tasks.js";

export function TasksList() {
    const[tasks, setTasks] = useState(tasksData);

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleTasksAdd = () => {
        const newTasks = [...tasks];
        newTasks.push({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            completed: false
        });
        setTasks(newTasks);
    }

    const handleToggleTaskState = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
        console.log(tasks);
    };

    const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

    return (
        <>
            <div style={{
                float: "right"
            }}>
                <input placeholder="Title..." type="text" id="title" ref={titleRef} style={{padding: 10, fontSize: 15}}></input>
                <input placeholder="Description..." type="text" id="description" ref={descriptionRef} style={{padding: 10, fontSize: 15}}></input>
                <button style={{
                    padding: 10,
                    fontSize: 15,
                }} onClick={handleTasksAdd}>Add new task</button>
            </div>

            <div style={{
                float: "left",
                color: "white"
            }}>

                {tasks.length === 0 ? <div>Empty tasks list</div> : 
                    <ul>
                        {
                            tasks.map(({title, description, completed}, index) => {
                                return (
                                    <>
                                        <li key={index} style={{
                                            color: "white",
                                            textDecoration: completed ? 'line-through' : 'none'
                                        }}>{title}
                                        <button onClick={() => handleToggleTaskState(index)}>{completed ? "Undo": "Completed"}</button>
                                        <button onClick={() => handleDeleteTask(index)}>delete</button>
                                        </li>
                                        <li key={index} style={{
                                            textDecoration: completed ? 'line-through' : 'none',
                                            listStyle: 'none'}}>{description}
                                        </li>
                                    </>
                                    
                            )
                            })
                        }
                    </ul> 
                }    
            </div>
        </>
        
        
    );
}
