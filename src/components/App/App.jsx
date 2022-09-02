import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from 'components/Header';
import RegisterPage from 'pages/RegisterPage';
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';
import PhonebookPage from 'pages/PhonebookPage';
import { useEffect } from 'react';
// import { lazy, Suspense, useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from 'components/Routes/PrivateRote';
import PublicRoute from 'components/Routes/PublicRoute';

// const Home = lazy(() => import('pages/Home'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts/*"
            element={
              <PrivateRoute>
                <PhonebookPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
          {/* </Suspense> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
