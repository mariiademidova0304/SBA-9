import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";

//filtering tasks while only having a function as a prop that's gonna be called by the parent that has more
//details on tasks
export default function TaskFilter({ onFilterChange, onSearchInput }: TaskFilterProps) {
//filter by status, if the option is all - we don't actually pass an empty filter which should return original
    const filterStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filteredStatus = event.target.value;
        if (filteredStatus === 'all') {
            onFilterChange({});
        } else {
            onFilterChange({ status: filteredStatus as TaskStatus })
        }
    }

//filtering by priority
    const filterPriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filteredPriority = event.target.value;
        if (filteredPriority === 'all') {
            onFilterChange({});
        } else {
            onFilterChange({ priority: filteredPriority as 'low' | 'medium' | 'high' })
        }
    }

    const searchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchedName = event.target.value;
        onSearchInput(searchedName);
    }

    return (
        <div style={{display:'flex', padding: '5px', gap: '5px'}}>
            <div>
                <label htmlFor="select-status">Status</label>
                <select id="select-status" name="select-status" onChange={filterStatus}>
                    <option value='all'>All</option>
                    <option value='pending'>Pending</option>
                    <option value='in-progress'>In progress</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
            <div>
                <label htmlFor="select-priority">Priority</label>
                <select name="select-priority" onChange={filterPriority}>
                    <option value='all'>All</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
            </div>
             <div>
                <label htmlFor="search-title">Search by name</label>
                <input id="search-title" type="text" onChange={searchByName}/>
            </div>
        </div>
    )
}