import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: '1',
                name: 'Ted Johnson',
                email: 'tj@gmail.com',
                phone: '222-222-2222',
                type: 'Personal'
            },
            {
                id: '2',
                name: 'Sara Smith',
                email: 'ssmith@gmail.com',
                phone: '111-111-1111',
                type: 'Professional'
            },
            {
                id: '3',
                name: 'Joung Hyun',
                email: 'jh@gmail.com',
                phone: '121-131-1441',
                type: 'Professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
