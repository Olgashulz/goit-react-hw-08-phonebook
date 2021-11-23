import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader';
import AppBar from './components/AppBar/AppBar';
// import styles from './App.module.css';
// import ContactsView from "./redux/views/ContactsView";
// import HomeView from "./redux/views/HomeView";
// import LoginView from "./redux/views/LoginView";
// import RegisterView from "./redux/views/RegisterView";
import Container from './components/Container';

import * as authOperations from './redux/auth/auth-operations';
// import * as authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() =>
  import('./redux/views/HomeView' /*webpackChungName: "HomePage"*/),
);

const RegisterView = lazy(() =>
  import('./redux/views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./redux/views/LoginView' /* webpackChunkName: "login-page" */),
);

const ContactsView = lazy(() =>
  import('./redux/views/ContactsView' /* webpackChunkName: "contact-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent)
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (

    <>

      <Container>


        <AppBar />


        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
      <ToastContainer autoClose={2500} />
    </>

  )
}
