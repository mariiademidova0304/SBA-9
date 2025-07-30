import { useState } from "react";
import type { InputFormData } from "../../types";
import type { TaskInputFormProps } from "../../types";

// export interface FormData {
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

const TaskInputForm: React.FC<TaskInputFormProps> = ({onTaskSubmit}) => {
    const [inputFormData, setInputFormData] = useState<InputFormData>({
        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate: '',
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;

        setInputFormData(prevInputFormData => ({
            ...prevInputFormData,
            [name]: value
        }))
    }

    const  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onTaskSubmit(inputFormData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task-name">Task</label>
                <input value={inputFormData.title} type="text" name="title" id="task-name" onChange={handleChange} required/>
                <label htmlFor="task-description">Description</label>
                <input value={inputFormData.description} type="text" name="description" id="task-description" onChange={handleChange} required/>
                <label htmlFor="select-status">Status</label>
                <select name="status" id="select-status" value={inputFormData.status} onChange={handleChange}>
                    <option value='pending'>Pending</option>
                    <option value='in-progress'>In progress</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
            <label htmlFor="select-priority">Priority</label>
                <select name="priority" id="select-priority" value={inputFormData.priority} onChange={handleChange}>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <label htmlFor="input-date">Due Date</label>
                <input value={inputFormData.dueDate} type="date" name="dueDate" id="input-date" onChange={handleChange} required/>
                <button type="submit">Add Task</button>
            <div>
            </div>
        </form>
    )
}

export default TaskInputForm;