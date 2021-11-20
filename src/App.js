// import Form from './components/Form';
// import Contacts from './components/Contacts';
// import Filter from "./components/Filter";
// import styles from './App.module.css';
import ContactsView from "./redux/views/ContactsView";
import HomeView from "./redux/views/HomeView";
import LoginView from "./redux/views/LoginView";
import RegisterView from "./redux/views/RegisterView";
import AppBar from "./components/AppBar/AppBar";

export default function App() {

  return (
    <>
      <AppBar />
      {/* <HomeView /> */}
      <ContactsView />
      <LoginView />
      <RegisterView />
      {/* <div className={styles.container}>
        <div className={styles.phonebook}>
          <h1 className={styles.title}>Phonebook</h1>
          <Form />

          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter />
          <Contacts />

        </div>
      </div> */}
    </>
  )
}
