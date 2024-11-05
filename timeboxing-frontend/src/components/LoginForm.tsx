import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Respuesta del servidor:', data);
                if (data.token) {
                    onLogin(data.token);
                } else {
                    alert('Error de autenticación');
                }
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
                alert('Error en la conexión con el servidor');
            });
    };

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'linear-gradient(to bottom right, #5a67d8, #2b6cb0)', color: '#fff' }}>
            <div className="col-md-4">
                <div className="card shadow-lg border-0 rounded" style={{ borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <div className="card-body p-5">
                        <h3 className="text-center mb-4" style={{ color: '#2d3748', fontWeight: '700' }}>Iniciar Sesión</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ borderRadius: '8px' }}
                                />
                                <label htmlFor="email">Correo electrónico</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ borderRadius: '8px' }}
                                />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn"
                                    style={{
                                        backgroundColor: '#2d3748', 
                                        color: '#fff', 
                                        borderRadius: '50px',
                                        padding: '10px 20px', 
                                        border: 'none',
                                        transition: 'background-color 0.3s ease', 
                                        width: '35%'
                                    }}>
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
