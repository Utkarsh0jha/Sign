import React, { useState } from 'react';
import SignIn from './SignIn';
import ForgetPassword from './ForgetPassword';
import SignUp from './SignUp';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const [currentPage, setCurrentPage] = useState('signIn');

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="App">
            {currentPage === 'signIn' && <SignIn navigateTo={navigateTo} />}
            {currentPage === 'forgetPassword' && <ForgetPassword navigateTo={navigateTo} />}
            {currentPage === 'signUp' && <SignUp navigateTo={navigateTo} />}
        </div>
    );
}

export default App;
