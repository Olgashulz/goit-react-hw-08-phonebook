import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../auth/auth-operations';
import styles from './RegisterView.module.css'


export default function LoginView() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1 className={styles.title}> Phonebook </h1>
            <span className={styles.subtitle}>
                Sign in to use all the features of the application.
            </span>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                {/* <form style={styles.form} autoComplete="off"> */}
                <button type="submit" className={styles.closeBtn}>х</button>

                <label className={styles.labelForm}>
                    E-mail
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={styles.inputForm}
                    />
                </label>

                <label className={styles.labelForm}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={styles.inputForm}
                    />
                </label>


                <button type="submit" className={styles.formBtn}>Login</button>
            </form>
        </div>
    );
}