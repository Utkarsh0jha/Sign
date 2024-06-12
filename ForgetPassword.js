import React from 'react';
import './SignIn.css';

const ForgetPassword = ({ navigateTo }) => {
    return (
        <div className="sign-in-container">
            <div className="image-section"></div>
            <div className="form-section">
                <div className="header">
                    <div className="heading-container">
                        <h1>Forgot Password</h1>
                    </div>
                    <p>Remember your password? <a href="#signin" onClick={() => navigateTo('signIn')}>Sign In</a></p>
                </div>
                <form>
                    <div className="input-group">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" id="email" required />
                    </div>
                    <button type="submit" className="login-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;