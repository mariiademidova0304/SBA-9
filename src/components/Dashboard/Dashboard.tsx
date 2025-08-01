import TaskFilter from "../TaskFilter/TaskFilter";
import TaskInputForm from "../TaskForm/TaskInputForm";
import TaskList from "../TaskList/TaskList";
import type { DashboardProps } from "../../types";

export default function Dashboard({tasks, 
    onTaskSubmit, 
    onFilterChange, 
    onSearchInput, 
    onStatusChange, 
    onDelete} : DashboardProps) {


    return(
        <>
        <TaskInputForm onTaskSubmit={onTaskSubmit}/>
        <TaskFilter onFilterChange={onFilterChange} onSearchInput={onSearchInput}/>
        <TaskList tasks={tasks} onStatusChange={onStatusChange} onDelete={onDelete}/>
        </>
    )
}