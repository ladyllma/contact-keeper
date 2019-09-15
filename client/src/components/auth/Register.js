import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;

   const authContext = useContext(AuthContext);
   const { isAuthenticated, singUp, errors, clearErrors } = authContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push('/');
      }
      if (errors === 'User already exists') {
         setAlert(errors, 'danger');
         clearErrors();
      }
      // eslint-disable-next-line
   }, [props.history, isAuthenticated, errors]);

   const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const { name, email, password, confirmPassword } = user;

   const onChange = ({ target }) =>
      setUser({ ...user, [target.name]: target.value });

   const onSubmit = event => {
      event.preventDefault();
      if (name === '' || email === '' || password === '') {
         setAlert('Please, enter all fields.', 'danger');
      } else if (password !== confirmPassword) {
         setAlert('Passwords do not match.', 'danger');
      } else singUp({ name, email, password });
   };

   return (
      <div className="form-container">
         <h1>
            Create <span className="text-primary">Account</span>
         </h1>
         <form onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
               />
            </div>
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
                  minLength="6"
               />
            </div>
            <div className="form-group">
               <label htmlFor="confirmPassword">Confirm password</label>
               <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                  minLength="6"
               />
            </div>
            <input
               type="submit"
               value="Sign Up"
               className="btn btn-primary btn-block"
            />
         </form>
      </div>
   );
};

export default Register;
