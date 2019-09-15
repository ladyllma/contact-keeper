import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;

   const authContext = useContext(AuthContext);
   const { isAuthenticated, logIn, errors, clearErrors } = authContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push('/');
      }
      if (errors === 'Invalid credentials') {
         setAlert(errors, 'danger');
         clearErrors();
      }
      // eslint-disable-next-line
   }, [props.history, isAuthenticated, errors]);

   const [user, setUser] = useState({
      email: '',
      password: ''
   });

   const { email, password } = user;

   const onChange = ({ target }) =>
      setUser({ ...user, [target.name]: target.value });

   const onSubmit = event => {
      event.preventDefault();
      if (email === '' || password === '') {
         setAlert('Please, enter all fields.', 'danger');
      } else logIn({ email, password });
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
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
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
