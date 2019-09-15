import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, name, email, phone, type } = contact;

    const onDelete = () => {
        deleteContact(id);
        clearCurrent();
    };
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '}
                <span
                    className={
                        'badge ' +
                        (type === 'Personal'
                            ? 'badge-primary'
                            : 'badge-success')
                    }
                    style={{ float: 'right' }}
                >
                    {type}
                </span>
            </h3>
            <ul>
                {email && (
                    <li>
                        <i className="fas fa-envelope-open" />
                        <span style={{ marginLeft: '10px' }}>{email}</span>
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone" />
                        <span style={{ marginLeft: '10px' }}>{phone}</span>
                    </li>
                )}
            </ul>
            <p>
                <button
                    className="btn btn-dark btn-sm"
                    onClick={() => setCurrent(contact)}
                >
                    Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>
                    Delete
                </button>
            </p>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

const style = {
    mB: { marginBottom: '15px' },
    mBS: { marginBottom: '5px' }
};

export default ContactItem;
