import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
   const contactContext = useContext(ContactContext);
   const { addContact, updateContact, clearCurrent, current } = contactContext;

   const [contact, setContact] = useState({
      name: '',
      email: '',
      phone: '',
      type: 'Personal'
   });

   useEffect(() => {
      if (current !== null) {
         setContact(current);
      } else {
         clearFields();
      }
      // eslint-disable-next-line
   }, [contactContext, current]);

   const { name, email, phone, type } = contact;

   const clearFields = () => {
      setContact({
         ...contact,
         name: '',
         email: '',
         phone: '',
         type: 'Personal'
      });
   };

   const clearAll = () => {
      clearCurrent();
   };

   const onChange = ({ target }) =>
      setContact({ ...contact, [target.name]: target.value });

   const onSubmit = event => {
      event.preventDefault();
      if (current === null) {
         addContact(contact);
      } else {
         updateContact(contact);
      }
      clearAll();
   };

   return (
      <form onSubmit={onSubmit}>
         <h2 className="text-primary">
            {current ? 'Update Contact' : 'Add Contact'}
         </h2>
         <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
         />
         <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
         />
         <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={onChange}
         />
         <h5>Contact type</h5>
         <input
            type="radio"
            name="type"
            value="Personal"
            checked={type === 'Personal'}
            onChange={onChange}
         />{' '}
         Personal{' '}
         <input
            type="radio"
            name="type"
            value="Professional"
            checked={type === 'Professional'}
            onChange={onChange}
         />{' '}
         Professional{' '}
         <div>
            <input
               type="submit"
               value="Save"
               className="btn btn-primary btn-block"
            />
         </div>
         {current && (
            <div>
               <button className="btn btn-light btn-block" onClick={clearAll}>
                  Clear
               </button>
            </div>
         )}
      </form>
   );
};

export default ContactForm;
