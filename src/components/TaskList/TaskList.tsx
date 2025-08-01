import { ListGroup, ListGroupItem } from "react-bootstrap";
import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";


export default function TaskList({tasks, onStatusChange, onDelete} : TaskListProps){
       
    const taskList = tasks.map((task) =>
        <ListGroupItem key={task.id}>
            <TaskItem task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
        </ListGroupItem>
    );

    return(
        <ListGroup>
            {taskList}
        </ListGroup>

    )
}