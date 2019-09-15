import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
   SIGNUP_SUCCESS,
   SIGNUP_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   CLEAR_ERRORS
} from '../types';

const AuthState = props => {
   const initialState = {
      user: {},
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      errors: null
   };

   const [state, dispatch] = useReducer(authReducer, initialState);

   const singUp = async formData => {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      try {
         const res = await axios.post('/api/users', formData, config);
         dispatch({ type: SIGNUP_SUCCESS, payload: res.data });

         loadUser();
      } catch (error) {
         dispatch({ type: SIGNUP_FAIL, payload: error.response.data.msg });
      }
   };

   const loadUser = async () => {
      if (localStorage.token) {
         setAuthToken(localStorage.token);
      }

      try {
         const res = await axios.get('/api/auth');
         dispatch({ type: USER_LOADED, payload: res.data });
      } catch (error) {
         dispatch({ type: AUTH_ERROR });
      }
   };

   const logIn = async formData => {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      try {
         const res = await axios.post('/api/auth', formData, config);
         dispatch({ type: LOGIN_SUCCESS, payload: res.data });

         loadUser();
      } catch (error) {
         dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
      }
   };

   const logOut = () => {};

   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

   return (
      <AuthContext.Provider
         value={{
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            errors: state.errors,
            singUp,
            loadUser,
            logIn,
            logOut,
            clearErrors
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
