import React, { useEffect, useState } from 'react';

function TaskList({ token }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/task', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, [token]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Lista de Tareas</h2>
            {tasks.length > 0 ? (
                <ul className="list-group">
                    {tasks.map(task => (
                        <li key={task.id} className="list-group-item">
                            <h5>{task.title}</h5>
                            <p><strong>Prioridad:</strong> {task.priority}</p>
                            <p><strong>Descripción:</strong> {task.description}</p>
                            <p><strong>Estado:</strong> {task.status_task}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay tareas disponibles.</p>
            )}
        </div>
    );
}

export default TaskList;
