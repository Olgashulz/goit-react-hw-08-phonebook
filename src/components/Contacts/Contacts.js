import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux'
// import { deleteContact } from '../../redux/actions';
// import { visibleContacts } from '../../redux/selectors';
import { operations, selectors } from '../../redux';


function Contacts() {
    const contacts = useSelector(selectors.visibleContacts);
    // const filter = useSelector(state => state.filter);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.fetchContacts())
    }, [dispatch]);

    return (
        <ul className={styles.contactsList}>
            {contacts.map(({ name, number, id }) => (
                <li key={id}
                    className={styles.contactItem}>
                    {name}:
                    <span className={styles.contactTel}>{number}</span>
                    <button onClick={() => dispatch(operations.deleteContact(id))} className={styles.button}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default Contacts;
//////////////////////////////////////////////////////////////////////////


// import React from 'react';
// import styles from './Contacts.module.css';
// import { useSelector, useDispatch } from 'react-redux'
// import { deleteContact } from '../../redux/actions';
// import { visibleContacts } from '../../redux/selectors'


// function Contacts() {
//     // const contacts = useSelector(visibleContacts);

//     const contacts = useSelector(state => state.contacts)
//     const value = useSelector(state => state.filter)
//     const dispatch = useDispatch();

//     const visibleContacts = (contacts, filter) => {
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     };

//     return (
//         <ul className={styles.contactsList}>
//             {visibleContacts(contacts, value).map(({ name, number, id }) => (
//                 <li key={id}
//                     className={styles.contactItem}>
//                     {name}:
//                     <span className={styles.contactTel}>{number}</span>
//                     <button onClick={() => dispatch(deleteContact(id))} className={styles.button}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default Contacts;
