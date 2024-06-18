import styles from './ToDoList.module.css'
import {useState} from "react";

function ToDoList()
{
    const [tasks, setTasks] = useState(["Wake up", "Brush teeth"]);
    function addTask() {
        const taskInput = document.getElementById('addTaskInput');
        const newTask = taskInput.value.trim();
        if (newTask !== '')
        {
            setTasks(t => [...t, newTask]);
        }
        taskInput.value = '';
    }
    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index > 0)
        {
            const newTasks = [...tasks];
            [newTasks[index-1], newTasks[index]] = [newTasks[index], [newTasks[index-1]]]
            setTasks(newTasks)
        }
    }
    function moveTaskDown(index) {
        if (tasks[index + 1])
        {
            const newTasks = [...tasks];
            [newTasks[index+1], newTasks[index]] = [newTasks[index], [newTasks[index+1]]]
            setTasks(newTasks)
        }
    }
    return (
        <section>
            <h2>To-do List</h2>
            <div className={`card ${styles.toDoContainer}`}>
                <div className={styles.toDoCard}>
                    <div className={styles.toDoForm}>
                        <h3>How will you plan your day?</h3>
                        <div className="input-group">
                            <label htmlFor="addTaskInput">Add task</label>
                            <input type="text" id="addTaskInput" placeholder="Wash the dishes"/>
                        </div>
                        <button className="btn" onClick={addTask}>Submit</button>
                    </div>
                    <ul className={styles.toDoList}>
                        {tasks.length === 0 ?
                            "There's nothing to do today... You're so fucking lazy" :
                            tasks.map(
                                (task, index) =>
                                <li className={styles.toDoItem} key={index}>
                                    <p>{task}</p>
                                    <div className={styles.toDoButtons}>
                                        <button onClick={() => moveTaskUp(index)}>
                                            <svg width="30" height="30" viewBox="0 0 24 25" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                                <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                            </svg>
                                        </button>
                                        <button onClick={() => moveTaskDown(index)}>
                                            <svg style={{transform: 'rotate(180deg)'}} width="50" height="50"
                                                 viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" className="arrow-up">
                                                <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                                <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round"/>
                                            </svg>
                                        </button>
                                        <button onClick={() => deleteTask(index)}>
                                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" className="trash-can">
                                                <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path
                                                    d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M10 11V17" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14 11V17" stroke="currentColor" strokeWidth="2"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                </ul>
            </div>
        </div>
</section>
)
    ;
}

export default ToDoList