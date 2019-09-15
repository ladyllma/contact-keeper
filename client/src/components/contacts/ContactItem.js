import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;
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
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;
