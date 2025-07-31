export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface InputFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
  onSearchInput: (searchWord: string) => void;
}

export interface InputFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface TaskInputFormProps {
    onTaskSubmit: (newTaskData: InputFormData) => void;
}

export interface DashboardProps {
  tasks: Task[];
  onTaskSubmit: (newTaskData: InputFormData) => void; 
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void; 
  onSearchInput: (searchWord: string) => void; 
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; 
  onDelete: (taskId: string) => void;
}