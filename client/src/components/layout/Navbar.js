import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, logOut, user } = authContext;

   const onLogOut = () => {
      logOut();
   };

   const authLinks = (
      <Fragment>
         <li>{user && `Hello, ${user.name}`}</li>
         <li>
            <a onClick={onLogOut} href="#!">
               <i className="fas fa-sign-out-alt" />
               <span className="hide-sm">Log Out</span>
            </a>
         </li>
      </Fragment>
   );

   const guestLinks = (
      <Fragment>
         <li>
            <Link to="/signup">Sign Up</Link>
         </li>
         <li>
            <Link to="/login">Log In</Link>
         </li>
      </Fragment>
   );

   return (
      <div className="navbar bg-primary">
         <h1>
            <i className={icon}></i> {title}
         </h1>
         <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
   );
};

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string
};

Navbar.defaultProps = {
   title: 'ContactKeeper',
   icon: 'fas fa-id-card-alt'
};

export default Navbar;
