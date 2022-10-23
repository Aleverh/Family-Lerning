import React from "react";
import LoginPage from "./pages/loginPage/LoginForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from "./pages/registerPage/RegisterPage";
import "./components/index.scss";
import Chat from "./pages/homePage/Chat";
import ProtectedRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";

const App = () => {
    return (
            <Router>
                <div className="container">
                    <Routes>
                        <Route index element={<PublicRoute><LoginPage/></PublicRoute>}/>
                        <Route path="/chat" element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
                        <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>}/>
                        <Route path="/register" element={<PublicRoute><RegisterPage/></PublicRoute>}/>
                    </Routes>
                </div>

            </Router>
)}

export default App;
