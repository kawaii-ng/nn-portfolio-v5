import React, { useState } from 'react';
import './LoginForm.scss';

function LoginForm() {

    const [isFail, setIsFail] = useState(false);

    const handleLogin = () => {

        setIsFail(true);

    }

    return (

        <div className="login-form">
            <div className="form-content">
                <h1 className='login-form-title'>Admin</h1>
                <div className='login-form-field'>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='login-form-field'>
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="login-form-bottom" onClick={handleLogin}>
                   

                    <div className="login-button">
                        Login
                    </div>
                    {

                        isFail && (
                            <p className='login-fail'>Login failed. Please try again.</p>

                        )

                    }
                    
                </div>
            </div>
        </div>

    );
}

export default LoginForm;
