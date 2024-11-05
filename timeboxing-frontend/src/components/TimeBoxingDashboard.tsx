import React, { useEffect, useState } from 'react';

function TimeBoxingDashboard({ token }) {
    const [timeboxes, setTimeboxes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTimeboxes(data);
            });
    }, [token]);

    return (
        <div>
            <h2>Dashboard de TimeBoxing</h2>
            {timeboxes.length > 0 ? (
                <ul>
                    {timeboxes.map((timebox) => (
                        <li key={timebox.id}>
                            <strong>{timebox.name}</strong> - {timebox.start_time} a {timebox.end_time} - {timebox.status}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay datos de TimeBoxing disponibles.</p>
            )}
        </div>
    );
}

export default TimeBoxingDashboard;
