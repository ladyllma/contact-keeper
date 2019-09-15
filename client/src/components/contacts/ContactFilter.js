import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilter, filtered } = contactContext;

    const text = useRef('');

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = ({ target }) => {
        if (text.current.value !== '') {
            filterContacts(target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input
                ref={text}
                type="text"
                placeholder="Filter contacts..."
                onChange={onChange}
            />
        </form>
    );
};

export default ContactFilter;
