import React from 'react';
import './SignIn.css';

const SignIn = ({ navigateTo }) => {
    return (
        <div className="sign-in-container">
            <div className="image-section"></div>
            <div className="form-section">
                <div className="header">
                    <div className="heading-container">
                        <h1>Sign In</h1>
                    </div>
                    <p>Don't have an account? <a href="#signup" onClick={() => navigateTo('signUp')}>Sign up</a></p>
                </div>
                <form>
                    <div className="input-group">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" id="password" required />
                    </div>
                    <div className="forgot-password">
                        <a href="#forgot-password" onClick={() => navigateTo('forgetPassword')}>Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
