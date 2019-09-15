import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;

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
      } else console.log('Sing Up submit');
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
