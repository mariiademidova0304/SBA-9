import { useState } from 'react'
import './App.css'
import type { Task } from './types'
import TaskList from './components/TaskList/TaskList'
import type { TaskStatus } from './types'
import TaskFilter from './components/TaskFilter/TaskFilter'
import Dashboard from './components/Dashboard/Dashboard'
import type { InputFormData } from './types'


function App() {

 const [displayingTasks, setDisplayingTasks] = useState<Task[]>([]);

 const handleNewTask = (newTaskData: InputFormData) => {
    const newTask : Task = {
        id: newTaskData.title + newTaskData.dueDate,
        title: newTaskData.title,
        description: newTaskData.description,
        status: newTaskData.status,
        priority: newTaskData.priority,
        dueDate: newTaskData.dueDate
    }

    setDisplayingTasks([...displayingTasks, newTask])
 }

 
 /////////////////////////////THIS IS ALL OLD CODE//////////////////////////////////////////////
    //setting the state of them

    //copied this off lesson example, mapping to set a new state of the tasks where updated task has its new status
    const changeTaskStatus = (taskId: string, newStatus: TaskStatus) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        )
    }
//filtering to a new array that doesn't include a task with delete id 
    const deleteTask = (taskId: string) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.filter(task => task.id !== taskId)
        )
    }
//filtering all the tasks we have to then add them to state
//filtering either by status or priority
//problem: if i change the status of my tasks it's not changed in my array of tasks - i need to be changing them too on status change
    const filterTasks = (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';}) => {
            if(filters.status){
            setDisplayingTasks(tasksList.filter(task => task.status === filters.status))
            } else if (filters.priority) {
                setDisplayingTasks(tasksList.filter(task => task.priority === filters.priority))
            //i might not need this else since i have the 'all' logic already?
            }else{
                setDisplayingTasks(tasksList)
            }
        }

    return (
        <>
        <Dashboard 
        tasks = {displayingTasks}
        onTaskSubmit={handleNewTask}
        onDelete={}
        onFilterChange={}
        onSearchInput={}
        onStatusChange={}/>
            {/* <TaskFilter
                onFilterChange={filterTasks} />
            <TaskList
                tasks={displayingTasks}
                onStatusChange={changeTaskStatus}
                onDelete={deleteTask} /> */}
        </>

    )
}

export default App
