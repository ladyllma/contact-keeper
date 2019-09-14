import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => (
                <h1>{contact.name}</h1>
            ))}
        </Fragment>
    );
};

export default Contacts;
