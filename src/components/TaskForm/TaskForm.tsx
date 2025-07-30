import { useState } from "react";
import type { InputFormData, TaskStatus } from "../../types";

// export interface FormData {
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

const TaskInputForm: React.FC = () => {
    const [inputFormData, setInputFormData] = useState<InputFormData> ({
        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate: ''
    })
}