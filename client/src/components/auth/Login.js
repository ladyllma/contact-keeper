import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = ({ target }) =>
        setUser({ ...user, [target.name]: target.value });

    const onSubmit = event => {
        event.preventDefault();
        console.log('Login submit');
    };

    return (
        <div className="form-container">
            <h1>
                Contact<span className="text-primary">Keeper</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Log In"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
};

export default Login;
