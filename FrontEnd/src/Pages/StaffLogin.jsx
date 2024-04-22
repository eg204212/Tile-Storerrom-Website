import React, { useState } from "react";
import '../Components/StaffLoginDesign.css';
import { useNavigate } from "react-router-dom";

export const StaffLogin = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Hardcoded username and password
        const validUsername = 'abc';
        const validPassword = '123';

        if (userName === validUsername && password === validPassword) {
            // If username and password are valid, redirect to Selection page
            navigate("/UserTileList");
        } else {
            // If username or password is invalid, display error message
            setError('Invalid username or password');
        }
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleCloseError = () => {
        setError('');
    };

    return (
        <div className="Classmain11">
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            </form>
            <div className="content1">
                <div className="Class2ss">
                    <form className="login">Login</form>
                    <form className="sentence">Enter your credentials to access your account</form>
                    <form className="UN">User Name</form>
                    <form>
                        <input className="Box0_1" type="text" placeholder="Enter User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </form>
                    <form className="PW">Password</form>
                    <form>
                        <input className="Box0_1" type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </form>
                    <div className="content2">
                        <form className="checkbox-and-link">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                Remember me
                            </label>
                            <span className="forgot-password" onClick={() => navigate("/ResetPW")}>Forgot password?</span>
                        </form>
                    </div>

                    <div className="content3">
                    <button className="button-admin1">
                    <span className="log-admin" onClick={() => navigate("/AllProductDetails")}>LOGIN AS ADMIN</span>
                    </button>    
                    <button className="button-admin2">
                    <span className="log-admin" onClick={handleLogin}>LogIn</span>
                    </button>
                    </div>

                    <form>Don't have an Account?
                       <span className="signup" onClick={() => navigate("/StaffRegister")}>Sign Up</span>
                    </form>
                </div>
                <div className="class2sp">
                    <form></form>
                </div>
            </div>
            {error && (
    <div className="error-modal">
        <div className="error-modal-content">
            <span className="close" onClick={handleCloseError}>&times;</span>
            <p>{error}</p>
        </div>
    </div>
)}

        </div>
    );
};

export default StaffLogin;
