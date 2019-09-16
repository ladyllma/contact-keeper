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

import React from 'react';

export default (state, action) => {
   switch (action.type) {
      case SIGNUP_SUCCESS:
      case LOGIN_SUCCESS:
         localStorage.setItem('token', action.payload.token);
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false
         };
      case SIGNUP_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
      case AUTH_ERROR:
         localStorage.removeItem('token');
         return {
            ...state,
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,
            errors: action.payload
         };
      case USER_LOADED:
         return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
            loading: false
         };
      case CLEAR_ERRORS:
         return {
            ...state,
            errors: null
         };

      default:
         return state;
   }
};
