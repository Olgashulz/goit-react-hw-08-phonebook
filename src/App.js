import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar';
// import styles from './App.module.css';
import ContactsView from "./redux/views/ContactsView";
import HomeView from "./redux/views/HomeView";
import LoginView from "./redux/views/LoginView";
import RegisterView from "./redux/views/RegisterView";

// import PublicRoute from './components/PublicRoute/PublicRoute.js';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

import * as authOperations from './redux/auth/auth-operations';
import * as authSelectors from './redux/auth/auth-selectors';

// const HomeView = lazy(() =>
//   import('./views/HomeView' /* webpackChunkName: "home-page" */),
// );

// const RegisterView = lazy(() =>
//   import('./views/RegisterView' /* webpackChunkName: "register-page" */),
// );

// const LoginView = lazy(() =>
//   import('./views/LoginView' /* webpackChunkName: "login-page" */),
// );

// const ContactView = lazy(() =>
//   import('./views/ContactView' /* webpackChunkName: "contact-page" */),
// );

export default function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </>
  )
}
