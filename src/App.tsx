import { useState } from 'react'
import './App.css'
import type { Task } from './types'
import TaskList from './components/TaskList/TaskList'
import type { TaskStatus } from './types'
import TaskFilter from './components/TaskFilter/TaskFilter'
import Dashboard from './components/Dashboard/Dashboard'
import type { InputFormData } from './types'


function App() {
//creating 2 arrays, one will hold all existing tasks, another will only have those we need to display(for filtering)
const [allTasks, setAllTasks] = useState<Task[]>([])
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
    setAllTasks([...allTasks, newTask])
 }

 //filtering to a new array that doesn't include a task with delete id 
 const deleteTask = (taskId: string) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.filter(task => task.id !== taskId)
        )
        setAllTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        )
    }

      //copied this off lesson example, mapping to set a new state of the tasks where updated task has its new status
    const changeTaskStatus = (taskId: string, newStatus: TaskStatus) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        )
        setDisplayingTasks(prevTasks => 
            prevTasks.map(task =>
                task.id === taskId ? {...task, status: newStatus} : task
            )
        )
    }


//filtering all the tasks we have in the state to then add them to state of displaying tasks without losing those from filtering
//filtering either by status or priority
    const filterTasks = (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';}) => {
            const filteringTasks = allTasks;
            if(filters.status){
            setDisplayingTasks(filteringTasks.filter(task => task.status === filters.status))
            } else if (filters.priority) {
                setDisplayingTasks(filteringTasks.filter(task => task.priority === filters.priority))
            //i might not need this else since i have the 'all' logic already?
            }else{
                setDisplayingTasks(filteringTasks)
            }
        }
 

    return (
        <>
        <Dashboard 
        tasks = {displayingTasks}
        onTaskSubmit={handleNewTask}
        onDelete={deleteTask}
        onFilterChange={filterTasks}
        onSearchInput={}
        onStatusChange={changeTaskStatus}/>
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
