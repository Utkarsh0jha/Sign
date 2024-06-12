import React, { useState } from 'react';
import './SignUp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignUp = ({ navigateTo }) => {
    const [category, setCategory] = useState('STARTUP');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className="sign-up-container">
            <div className="image-section"></div>
            <div className="form-section">
                <div className="header">
                    <div className="heading-container">
                        <h1>Sign Up</h1>
                    </div>
                    <p>Already have an account? <a href="#signin" onClick={() => navigateTo('signIn')}>Sign In</a></p>
                </div>
                <form>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                value="STARTUP"
                                checked={category === 'STARTUP'}
                                onChange={handleCategoryChange}
                            />
                            STARTUP
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="INVESTOR"
                                checked={category === 'INVESTOR'}
                                onChange={handleCategoryChange}
                            />
                            INVESTOR
                        </label>
                    </div>
                    {category === 'STARTUP' && (
                        <>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="First Name" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-phone"></i>
                                <input type="text" placeholder="Phone Number" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Confirm Password" required />
                            </div>
                        </>
                    )}
                    {category === 'INVESTOR' && (
                        <>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="First Name" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-phone"></i>
                                <input type="text" placeholder="Phone Number" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-dollar-sign"></i>
                                <input type="number" placeholder="Minimum Equity Value" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-dollar-sign"></i>
                                <input type="number" placeholder="Maximum Equity Value" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-industry"></i>
                                <input type="text" placeholder="Sector" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-briefcase"></i>
                                <input type="text" placeholder="Designation" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-building"></i>
                                <input type="text" placeholder="Fund Name" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-globe"></i>
                                <input type="text" placeholder="Website" required />
                            </div>
                        </>
                    )}
                    <div className="input-group checkbox-group">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            Agree <a href="#terms">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="submit" className="submit-button">SignUp</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
