import type { TaskStatus } from "../../types";
import type { TaskItemProps } from "../../types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const updatedStatus = event.target.value;
        onStatusChange(task.id, updatedStatus as TaskStatus);
    }

    const deleteTask = () => {
        onDelete(task.id);
    }

    return (
        <Container>
            <Row>
                <Col>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <Row>
                            <Col>
                                <span style={{
                                    color:
                                        task.priority === 'low' ? 'green' :
                                            task.priority === 'medium' ? 'orange' : 'red'
                                }}>
                                    Priority: {task.priority}</span> </Col>
                            <Col>
                                <span>Due date: {task.dueDate}</span>
                            </Col>
                        </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Form.Select value={task.status} onChange={handleStatusChange}>
                                <option value='pending'>Pending</option>
                                <option value='in-progress'>In progress</option>
                                <option value='completed'>Completed</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Button onClick={deleteTask}>Delete</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}