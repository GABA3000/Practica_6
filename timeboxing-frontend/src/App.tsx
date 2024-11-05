import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import CreateTask from './page/Task';


function App() {
    const [token, setToken] = useState(null);

    const handleLogin = (userToken) => {
        setToken(userToken);
    };

    return (
        <div className="App">
            {!token ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/create-task" element={<CreateTask />} />
                        </Routes>
                    </Router>
                </>
            )}
        </div>
    );
}

export default App;
