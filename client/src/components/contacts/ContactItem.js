import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
   const contactContext = useContext(ContactContext);
   const { deleteContact, setCurrent, clearCurrent } = contactContext;

   const { _id, name, email, phone, type } = contact;

   const onDelete = () => {
      deleteContact(_id);
      clearCurrent();
   };
   return (
      <div className="card bg-light">
         <h3 className="text-primary text-left">
            {name}{' '}
            <span
               className={
                  'badge ' +
                  (type === 'Personal' ? 'badge-primary' : 'badge-success')
               }
               style={{ float: 'right' }}
            >
               {type}
            </span>
         </h3>
         <ul style={{ marginTop: '10px' }}>
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
         <p style={{ marginTop: '10px' }}>
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

export default ContactItem;
