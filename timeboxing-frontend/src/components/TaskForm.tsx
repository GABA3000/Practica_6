import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, priority, userId: 1, description, status_task: status }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Task created:', data);
            navigate('/'); // Redirige al dashboard
        } else {
            console.error('Error al crear la tarea');
        }
    };

    return (
        <div style={styles.container}>
            <div className="card p-5 shadow-lg" style={styles.card}>
                <h2 className="text-center mb-4 text fw-bold">Capturar Tarea</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Prioridad"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            className="form-control form-control-lg"
                            placeholder="Descripción"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={styles.textarea}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Estado"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100" style={styles.button}>
                        Guardar Tarea
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom right, #5a67d8, #2b6cb0)'
    },
    card: {
        maxWidth: '800px',
        borderRadius: '20px',
        backgroundColor: '#ffffff',
        border: 'none',
        color:'#2d3748'
    },
    input: {
        borderRadius: '10px',
        border: '1px solid #ced4da',
        padding: '10px 15px',
    },
    textarea: {
        borderRadius: '10px',
        border: '1px solid #ced4da',
        padding: '10px 15px',
    },
    button: {
        borderRadius: '10px',
        backgroundColor: '#2d3748',
        border: 'none',
        transition: 'background-color 0.3s, transform 0.2s',
    },
};

export default TaskForm;
