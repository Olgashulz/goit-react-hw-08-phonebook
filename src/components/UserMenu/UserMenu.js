import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import defaultAvatar from '../../pictures/icons/sign.png';
import * as authSelectors from '../../redux/auth/auth-selectors';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Добро пожаловать, </span>
            {/* <button type="button"> */}
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>

                Выйти
            </button>
        </div>
    );
}