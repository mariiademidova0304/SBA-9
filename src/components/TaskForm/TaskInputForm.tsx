import { useState } from "react";
import type { InputFormData } from "../../types";
import type { TaskInputFormProps } from "../../types";
import { Button, Form } from "react-bootstrap";

// export interface FormData {
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }


//creating input form following instructions from the lesson on basic forms
//passing props, adding them as type to React.FC because React.Fc is not accepting props
const TaskInputForm: React.FC<TaskInputFormProps> = ({ onTaskSubmit }) => {
    //saving initial state in a variable to clear the fields after submission
    const initialState: InputFormData = {
        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate: '',
    }

    const [inputFormData, setInputFormData] = useState<InputFormData>(initialState);

    //creating handler for changes, using union type since my fields are either input or select
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        //not entirely understanding, but we should be updating the state based off where change was done
        //then linking name to the name in the state and changing value
        setInputFormData(prevInputFormData => ({
            ...prevInputFormData,
            [name]: value
        }))
    }

    //sending state to parent with function prop, created in the index.ts and imported here
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onTaskSubmit(inputFormData);
        setInputFormData(initialState)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <label htmlFor="task-name">Task</label>
                <input value={inputFormData.title} type="text" name="title" id="task-name" onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <label htmlFor="task-description">Description</label>
                <input value={inputFormData.description} type="text" name="description" id="task-description" onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
                <label htmlFor="select-status">Status</label>
                <Form.Select name="status" id="select-status" value={inputFormData.status} onChange={handleChange}>
                    <option value='pending'>Pending</option>
                    <option value='in-progress'>In progress</option>
                    <option value='completed'>Completed</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
            <label htmlFor="select-priority">Priority</label>
            <Form.Select name="priority" id="select-priority" value={inputFormData.priority} onChange={handleChange}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </Form.Select>
            </Form.Group>
            <Form.Group>
            <label htmlFor="input-date">Due Date</label>
            <input value={inputFormData.dueDate} type="date" name="dueDate" id="input-date" onChange={handleChange} required />
            <Button type="submit">Add Task</Button>
            </Form.Group>
        </Form>
    )
}

export default TaskInputForm;