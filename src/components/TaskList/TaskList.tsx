import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";


export default function TaskList({tasks, onStatusChange, onDelete} : TaskListProps){
       
    const taskList = tasks.map((task) =>
        <li key={task.id}>
            <TaskItem task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
        </li>
    );

    return(
        <ul>
            {taskList}
        </ul>

    )
}