import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Todos from './Pages/Todos';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/favoritos" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/vertodos" element={<Todos />} />
            </Routes>
        </Router>
    )
}

export default App;
