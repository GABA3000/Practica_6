import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

function Dashboard() {
    const [date, setDate] = useState(new Date()); 

    const onDateChange = (selectedDate) => {
        setDate(selectedDate);
        console.log('Fecha seleccionada:', selectedDate);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dashboard</h1>
            <Link to="/create-task" className="btn btn-primary mb-4" style={styles.button}>Crear Nueva Tarea</Link>

            <div style={styles.calendarContainer}>
                <h2 style={styles.subtitle}>Calendario</h2>
                <Calendar
                    onChange={onDateChange}
                    value={date}
                    className="calendar"
                    style={styles.calendar}
                />
            </div>

            <TaskList />
        </div>
    );
}

const styles = {
    container: {
        marginTop: '2rem',
        padding: '2rem',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#343a40',
    },
    button: {
        display: 'block',
        margin: '0 auto 1rem',
        padding: '10px 20px',
        backgroundColor: '#2d3748',
        borderColor: '#2d3748',
        fontWeight: 'bold',
        width: '200px',
    },
    calendarContainer: {
        border: '1px solid #dee2e6',
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: '1rem',
        color: '#343a40',
    },
    calendar: {
        margin: '0 auto',
    },
};

export default Dashboard;
